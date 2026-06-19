"""Remove light/checkerboard background from hardh-logo.png."""
from PIL import Image
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
LOGO = ROOT / "assets" / "images" / "hardh-logo.png"
SRC = Path(
    r"C:\Users\melos\.cursor\projects\c-Users-melos-OneDrive-Desktop-HARDHLOSI\assets"
    r"\c__Users_melos_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_"
    r"SIMBOLI-HF-PNG-eb652c80-3bfd-4051-b2e8-c0d3096aaae4.png"
)

source = SRC if SRC.exists() else LOGO
im = Image.open(source).convert("RGBA")
pixels = im.load()
w, h = im.size

for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        spread = max(r, g, b) - min(r, g, b)
        # neutral background: white + checkerboard grays (not orange leaf)
        if spread < 45:
            pixels[x, y] = (r, g, b, 0)

LOGO.parent.mkdir(parents=True, exist_ok=True)
im.save(LOGO, optimize=True)
print(f"saved {LOGO} ({w}x{h})")
