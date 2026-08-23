# Open Design — read this first

## You used the wrong screen (this is why everything looked fake)

| Screen | What it does |
|--------|----------------|
| **“Design a system, in minutes”** + Link local code | AI **builds a new** design system. It often fails and puts your **folder path as button text** (what you saw). |
| **Import an existing package** (below) | Uses your real `DESIGN.md`, `tokens.css`, and colors. |

**Delete** the fake “Product” design system Open Design created. Start over with import.

---

## The easy way (import — do this)

### 1. Update repo

Double-click **`open-design-here.bat`**  
—or:

```bat
cd C:\Projects\Brand-System\brand-system-main
git pull
```

### 2. Import the package (not “Design a system in minutes”)

In Open Design:

1. Open **Settings** (gear) → **Design Systems**
2. **Import** → choose **Local folder** / **Project path**
3. Browse to:

   ```text
   C:\Projects\Brand-System\brand-system-main\design-systems\celebration-onpoint
   ```

4. Confirm you see **Celebration OnPoint** in the list

If you only see “Design a system, in minutes” on the home page, look for **Settings → Design Systems** or a **library** icon in the sidebar.

### 3. Create designs from the imported system

- Pick **Celebration OnPoint** in the design-system picker
- Click **Create new design** / **Create with this design system**
- Do **not** go back to “Design a system, in minutes”

---

## Alternative: paste a URL (same screen you used)

On **“Design a system, in minutes”**, use the **top** box only:

**GitHub or website** → paste → **Add**:

```text
https://raw.githubusercontent.com/thejparXCD/brand-system/main/design-systems/celebration-onpoint/DESIGN.md
```

**Do not** use **Link local code** on that screen — it triggers a bad re-extract.

Optional second URL (tokens):

```text
https://raw.githubusercontent.com/thejparXCD/brand-system/main/design-systems/celebration-onpoint/tokens.css
```

In **Notes**, paste:

```text
This is a finished package. Copy tokens from tokens.css exactly.
Colors: --bg #f7f9fc, --fg #0d1424, --accent #f5c518 (gold, one CTA only), --c-blue #1056a5.
Dark marketing: ink #0a0814 + Light Fields. Poppins + Open Sans. Do not invent colors.
Do not put file paths in the UI as text.
```

---

## What real colors look like

| Token | Hex | Use |
|-------|-----|-----|
| Page (light) | `#F7F9FC` | `--bg` |
| Text | `#0D1424` | `--fg` |
| Gold accent | `#F5C518` | `--accent` (one button) |
| Blue | `#1056A5` | secondary / structure |
| Ink (dark) | `#0A0814` | heroes with Light Fields |

If previews show gray `#D9DEE7` or your **C:\... path as words**, the import failed — delete and use **Settings → Import** above.

---

## Folder to pick

```text
design-systems\celebration-onpoint
```

Must contain `manifest.json`, `DESIGN.md`, `tokens.css`.
