import fitz  # PyMuPDF
import os

PDF = r"C:\Users\Computer House\Downloads\Jamaa 3rd Draft - Website.pdf"
OUT_PAGES = r"c:\Users\Computer House\Desktop\jamma\scripts\pdf_pages"
OUT_IMGS = r"c:\Users\Computer House\Desktop\jamma\scripts\pdf_images"
os.makedirs(OUT_PAGES, exist_ok=True)
os.makedirs(OUT_IMGS, exist_ok=True)

doc = fitz.open(PDF)
print(f"pages: {len(doc)}")

# 1) Render each page to a full PNG (for visual reference)
for i, page in enumerate(doc, start=1):
    pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))  # 2x scale
    pix.save(os.path.join(OUT_PAGES, f"page-{i:02d}.png"))

# 2) Extract embedded raster images per page
for i, page in enumerate(doc, start=1):
    imgs = page.get_images(full=True)
    for j, img in enumerate(imgs, start=1):
        xref = img[0]
        try:
            base = doc.extract_image(xref)
            ext = base["ext"]
            w = base.get("width", "?")
            h = base.get("height", "?")
            fn = f"p{i:02d}_img{j}_{w}x{h}_x{xref}.{ext}"
            with open(os.path.join(OUT_IMGS, fn), "wb") as f:
                f.write(base["image"])
            print(f"page {i}: {fn}")
        except Exception as e:
            print(f"page {i}: xref {xref} failed: {e}")

print("done")
