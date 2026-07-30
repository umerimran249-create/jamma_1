"""Integrate newly loaded JAMMA icons + photos into client/public/images.

- Icons 1-17: strip near-white backgrounds so they sit cleanly on any section.
- JAMMA Pics: strip black Canva padding / frames and soft-round crop.
"""
import os
from collections import deque

import numpy as np
from PIL import Image, ImageDraw

ROOT = r"c:\Users\Computer House\Desktop\jamma\public"
DST = r"c:\Users\Computer House\Desktop\jamma\client\public\images"

# Numbered icon files -> semantic names used by the React site
ICON_MAP = {
    "1.png": "icon-processes.png",
    "2.png": "icon-activity.png",
    "3.png": "icon-profitability.png",
    "4.png": "icon-ambition.png",
    "5.png": "icon-purpose.png",
    "6.png": "icon-thinking.png",
    "7.png": "icon-excellence.png",
    "8.png": "icon-results.png",
    "9.png": "icon-packaging.png",
    "10.png": "icon-instagram.png",
    "11.png": "icon-facebook.png",
    "12.png": "icon-linkedin.png",
    "13.png": "icon-twitter.png",
    "14.png": "icon-phone.png",
    "15.png": "icon-location.png",
    "16.png": "icon-email.png",
    "17.png": "icon-web.png",
}

# Higher-quality replacements for the PDF-extracted photos
PHOTO_MAP = {
    "JAMMA Pics (1).png": "hero.png",
    "JAMMA Pics (2).png": "intro.png",
    "JAMMA Pics (3).png": "founder.png",
    "JAMMA Pics (4).png": "about.png",
    "JAMMA Pics (5).png": "industries.png",
    "JAMMA Pics (6).png": "services-bg.jpg",
    "JAMMA Pics (7).png": "divider.png",
}


def strip_white_bg(src, out_path, thresh=245):
    """Make edge-connected near-white pixels transparent (icons).

    Interior white (logo marks, iris rings, etc.) is preserved.
    Resize first so flood-fill stays fast on large Canva exports.
    """
    im = Image.open(src).convert("RGBA")
    im.thumbnail((512, 512), Image.Resampling.LANCZOS)
    arr = np.array(im)
    bg = flood_white_mask(arr, thresh=thresh)
    arr[bg, 3] = 0

    content = arr[:, :, 3] > 0
    rows = np.any(content, axis=1)
    cols = np.any(content, axis=0)
    if not rows.any() or not cols.any():
        raise RuntimeError(f"No content left in {src}")
    r0, r1 = np.where(rows)[0][[0, -1]]
    c0, c1 = np.where(cols)[0][[0, -1]]
    pad = 6
    h, w = arr.shape[:2]
    r0, r1 = max(0, r0 - pad), min(h - 1, r1 + pad)
    c0, c1 = max(0, c0 - pad), min(w - 1, c1 + pad)
    out = Image.fromarray(arr).crop((c0, r0, c1 + 1, r1 + 1))
    out.thumbnail((256, 256), Image.Resampling.LANCZOS)
    out.save(out_path, "PNG", optimize=True)
    print(f"icon  {os.path.basename(out_path)}: -> {out.size}")


def flood_white_mask(arr, thresh=245):
    h, w = arr.shape[:2]
    rgb = arr[:, :, :3]
    is_white = (rgb[:, :, 0] >= thresh) & (rgb[:, :, 1] >= thresh) & (rgb[:, :, 2] >= thresh)
    bg = np.zeros((h, w), dtype=bool)
    q = deque()
    for x in range(w):
        if is_white[0, x]:
            q.append((0, x))
            bg[0, x] = True
        if is_white[h - 1, x]:
            q.append((h - 1, x))
            bg[h - 1, x] = True
    for y in range(h):
        if is_white[y, 0]:
            q.append((y, 0))
            bg[y, 0] = True
        if is_white[y, w - 1]:
            q.append((y, w - 1))
            bg[y, w - 1] = True
    while q:
        y, x = q.popleft()
        for ny, nx in ((y - 1, x), (y + 1, x), (y, x - 1), (y, x + 1)):
            if 0 <= ny < h and 0 <= nx < w and not bg[ny, nx] and is_white[ny, nx]:
                bg[ny, nx] = True
                q.append((ny, nx))
    return bg


def flood_black_mask(arr, thresh=22):
    h, w = arr.shape[:2]
    rgb = arr[:, :, :3]
    is_black = (rgb[:, :, 0] <= thresh) & (rgb[:, :, 1] <= thresh) & (rgb[:, :, 2] <= thresh)
    bg = np.zeros((h, w), dtype=bool)
    q = deque()
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


def process_photo(src, out_path, as_jpg=False):
    im = Image.open(src).convert("RGBA")
    arr = np.array(im)
    bg = flood_black_mask(arr, thresh=22)
    arr[bg, 3] = 0

    content = arr[:, :, 3] > 0
    rows = np.any(content, axis=1)
    cols = np.any(content, axis=0)
    if not rows.any() or not cols.any():
        raise RuntimeError(f"No content left in {src}")
    r0, r1 = np.where(rows)[0][[0, -1]]
    c0, c1 = np.where(cols)[0][[0, -1]]
    cropped = Image.fromarray(arr).crop((c0, r0, c1 + 1, r1 + 1))

    w, h = cropped.size
    radius = max(12, int(min(w, h) * 0.035))
    mask = Image.new("L", (w, h), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, w - 1, h - 1], radius=radius, fill=255)

    base = cropped.convert("RGBA")
    existing = base.split()[3]
    combined = Image.fromarray(
        (np.array(existing).astype(np.uint16) * np.array(mask).astype(np.uint16) // 255).astype(
            np.uint8
        )
    )
    out = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    out.paste(base, (0, 0))
    out.putalpha(combined)

    if as_jpg or out_path.lower().endswith((".jpg", ".jpeg")):
        # Flatten onto dark navy so CSS cover backgrounds stay dark at edges
        bg_rgb = Image.new("RGB", out.size, (11, 32, 54))
        bg_rgb.paste(out, mask=out.split()[3])
        bg_rgb.save(out_path, "JPEG", quality=90)
        print(f"photo {os.path.basename(out_path)}: {im.size} -> {bg_rgb.size} (jpg)")
    else:
        out.save(out_path, "PNG")
        print(f"photo {os.path.basename(out_path)}: {im.size} -> {out.size}")


os.makedirs(DST, exist_ok=True)

for src_name, out_name in ICON_MAP.items():
    strip_white_bg(os.path.join(ROOT, src_name), os.path.join(DST, out_name))

for src_name, out_name in PHOTO_MAP.items():
    process_photo(
        os.path.join(ROOT, src_name),
        os.path.join(DST, out_name),
        as_jpg=out_name.lower().endswith((".jpg", ".jpeg")),
    )

print("done")
