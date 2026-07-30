"""Remove solid black padding around JAMAA photos extracted from the PDF.

Uses corner flood-fill so dark content inside the photo (e.g. skyscrapers)
is preserved, then crops to the remaining content and makes rounded corners
transparent so no leftover black shows on light page backgrounds.
"""
import os
from collections import deque
from PIL import Image, ImageDraw
import numpy as np

PDF = r"c:\Users\Computer House\Desktop\jamma\scripts\pdf_images"
DST = r"c:\Users\Computer House\Desktop\jamma\client\public\images"

JOBS = [
    ("founder.png", "p12_img1_1696x1696_x132.png"),
    ("about.png", "p11_img1_2515x2191_x125.png"),
    ("industries.png", "p07_img2_1493x2041_x101.png"),
    ("intro.png", "p02_img1_2901x2144_x46.png"),
]


def flood_black_mask(arr, thresh=18):
    """Mark near-black pixels connected to the image edge as background."""
    h, w = arr.shape[:2]
    rgb = arr[:, :, :3]
    is_black = (rgb[:, :, 0] <= thresh) & (rgb[:, :, 1] <= thresh) & (rgb[:, :, 2] <= thresh)
    bg = np.zeros((h, w), dtype=bool)
    q = deque()

    # seed from all edge pixels that are near-black
    for x in range(w):
        if is_black[0, x]:
            q.append((0, x))
            bg[0, x] = True
        if is_black[h - 1, x]:
            q.append((h - 1, x))
            bg[h - 1, x] = True
    for y in range(h):
        if is_black[y, 0]:
            q.append((y, 0))
            bg[y, 0] = True
        if is_black[y, w - 1]:
            q.append((y, w - 1))
            bg[y, w - 1] = True

    while q:
        y, x = q.popleft()
        for ny, nx in ((y - 1, x), (y + 1, x), (y, x - 1), (y, x + 1)):
            if 0 <= ny < h and 0 <= nx < w and not bg[ny, nx] and is_black[ny, nx]:
                bg[ny, nx] = True
                q.append((ny, nx))
    return bg


def process(src, out_path):
    im = Image.open(src).convert("RGBA")
    arr = np.array(im)
    bg = flood_black_mask(arr, thresh=18)

    # Make background fully transparent
    arr[bg, 3] = 0

    # Crop to remaining opaque content
    content = arr[:, :, 3] > 0
    rows = np.any(content, axis=1)
    cols = np.any(content, axis=0)
    if not rows.any() or not cols.any():
        raise RuntimeError(f"No content left in {src}")
    r0, r1 = np.where(rows)[0][[0, -1]]
    c0, c1 = np.where(cols)[0][[0, -1]]
    cropped = Image.fromarray(arr).crop((c0, r0, c1 + 1, r1 + 1))

    # Soft rounded mask so leftover corner blacks disappear on light pages
    w, h = cropped.size
    radius = max(12, int(min(w, h) * 0.04))
    mask = Image.new("L", (w, h), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, w - 1, h - 1], radius=radius, fill=255)

    # Combine existing alpha with rounded mask
    base = cropped.convert("RGBA")
    existing = base.split()[3]
    combined = Image.fromarray(
        (np.array(existing).astype(np.uint16) * np.array(mask).astype(np.uint16) // 255).astype(np.uint8)
    )
    out = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    out.paste(base, (0, 0))
    out.putalpha(combined)
    out.save(out_path, "PNG")
    print(f"{os.path.basename(out_path)}: {im.size} -> {out.size}  (bg removed)")


for out_name, src_name in JOBS:
    process(os.path.join(PDF, src_name), os.path.join(DST, out_name))

print("done")
