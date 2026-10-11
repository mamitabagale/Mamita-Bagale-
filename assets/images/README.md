# Photo Organization Guide for Mamita Bagale Travel Website

This folder (`assets/images/`) is where your personal travel photos and family legacy photos should be placed.

### Recommended Folder Structure:
- `assets/images/heritage/` : Photos of you and your dad, family trekking photos, Himalayan expeditions.
- `assets/images/nepal/` : Your photos of Annapurna, Everest, Pokhara, Kathmandu, Chitwan, etc.
- `assets/images/world/` : Your photos from trips around the world (Asia, Europe, etc.).
- `assets/images/profile/` : A welcoming portrait of you as the travel planner.

---

### Step 1: Copy your photos into this folder
You can drag and drop your photos into `assets/images/` or copy them with Finder.

### Step 2: Update `index.html` image paths
Whenever you add a photo (e.g. `assets/images/heritage/dad-trekking.jpg`), we will simply update the `src` attribute in [index.html](file:///Users/mamitabagale/Mamita-Bagale-/index.html):

```html
<!-- Example: Dad & Heritage Section -->
<img src="assets/images/heritage/dad-trekking.jpg" alt="25+ years trekking in the Himalayas">

<!-- Example: Annapurna card -->
<img src="assets/images/nepal/annapurna-view.jpg" alt="Annapurna Circuit Trek">
```

