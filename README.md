# M.D Gadgets frontend prototype

## Run locally in VS Code
1. Open this folder in VS Code.
2. Install/use the **Live Server** extension, then right-click `index.html` and choose **Open with Live Server**. A local server is recommended so all links and storage behave consistently.

## Brand and image assets
- Put the original, unmodified business logo at `assets/logo/md-gadgets-logo.png`. The interface shows a small text fallback only until the provided original file is placed there.
- Add product images in the matching category folders under `assets/images/` (`phones`, `laptops`, `playstation`, or `accessories`). Use the file path in the admin image field, for example `assets/images/phones/iphone-15.jpg`.

## Configuration and product system
- Change `WHATSAPP_NUMBER` once in `js/products.js`. Use international digits only, without `+` or spaces.
- `js/products.js` contains the initial product objects. On the first visit, those data populate the store; subsequent product edits are saved in browser `localStorage` under `mdGadgetsProducts`.
- Product cards, Hot Deals, search, filters, details and stock controls are all generated from this data. A `HOT-DEAL` product automatically appears on the home page; a `SOLD` product has shopping and negotiation actions disabled.

## Admin prototype
Open `admin.html`. The login is deliberately a visual frontend prototype—not real authentication—and it contains no production password. Log in with any syntactically valid email and non-empty password, then use the form to add or edit a product. Choose `SELL`, `SOLD`, or `HOT-DEAL` in Status, and use the delete confirmation to remove a product. Updates appear across customer pages using the same browser's localStorage.

## Production upgrade path
Replace the small localStorage functions in `js/products.js` with API calls to Firebase, Supabase, or a Node.js service. Move authentication and authorization to the backend, use cloud image storage, validate all product updates server-side, and add payment, real inventory, orders and secure admin roles.
