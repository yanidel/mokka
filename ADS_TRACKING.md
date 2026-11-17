# Mokka — Rosario delivery pilot and ecommerce conversion tracking

Updated 2026-11-17: all customer purchases will take place in **Tiendanube**. **WhatsApp is reserved exclusively for Regalos, cestas e instituciones**.

## 1. Rosario zone delivery guide

Origin: Mokka's shop in the Terminal de Rosario (local open 24 hours; express order cutoff announced as 21:00).

Reference tariff published by Punto a Punto: https://www.empreya.com.ar/puntoapunto/index.php

| Reference zone | Road distance | Indicative tariff |
| --- | --- | --- |
| Nearby | up to 5 km | ARS $4,000 |
| Intermediate | over 5 to 10 km | ARS $4,000–$8,000 |
| Extended | over 10 to 15 km | ARS $8,000–$12,000 |

Reference assumes first 5 km at $4,000 and additional km at $800; exact charges can differ with provider, schedule, availability and distance. **These are not Uber Envíos prices or confirmed Mokka delivery charges.** No courier service agreement or actual shipping booking is established by this code change. The three zone cards now link to the alfajor catalog, not WhatsApp.

**Before selling:** add a shipping method to **Mokka's Tiendanube** limited to eligible Rosario addresses/postcodes and delivery hours, and show actual shipping prices at checkout. Keep the cutoff of **21:00** consistent with the promised delivery capacity; orders placed later must not be promised same-day service. Offer pickup at the Terminal as a separate Tiendanube option if operationally available.

## 2. Tiendanube storefront routing

`shop-links.js` has one configuration line:

```js
const MOKKA_TIENDANUBE_CATALOG_URL = "";
```

Set this to the **actual Mokka** store/catalog URL once available. Do **not** reuse another business's Tiendanube link.

The homepage and the Rosario landing have buttons with `data-shop-link="alfajores"`. When the Tiendanube URL is configured, `shop-links.js` sends those links to the store, carrying `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `gclid`, `gbraid`, `wbraid`, and `fbclid` when present. With an empty URL, users see only the prototype's research catalog. **This is not a live checkout.** The static `index.html` demo has no real inventory, prices or payment capability.

Netlify's `_redirects` maps `/rosario` to `rosario.html`. Check the deployed route before buying traffic.

## 3. Measure purchase conversions — not WhatsApp leads

For Mokka ecommerce campaigns, the main performance event should be a **completed Tiendanube purchase**, with value and currency ARS, not a click to the product catalog.

1. Install **Mokka's** GA4 integration on its Tiendanube store. Ensure it sends `purchase` with `transaction_id`, `value`, `currency=ARS` and purchased products, and that one order is counted once.
2. Connect **Mokka's** Google Ads account to GA4, and import the ecommerce `purchase` key event or use the platform's supported Ads conversion setup without duplicate counting.
3. Connect the ad landing (`kaz.netlify.app/rosario`, or its eventual custom domain) to the Mokka store with consistent attribution. `shop-links.js` preserves campaign parameters when navigating across domains, but **cross-domain attribution also requires proper GA4 configuration and testing**.
4. Verify a test purchase end-to-end in GA4 DebugView / Realtime and Google Ads before optimizing for orders. Do not count catalog visits or WhatsApp opens as completed purchases.
5. Use the UTM-tagged campaign destination, for example: `https://kaz.netlify.app/rosario?utm_source=google&utm_medium=cpc&utm_campaign=rosario_express`. Instagram equivalents can use `utm_source=instagram&utm_medium=paid_social`.

No Mokka-owned GA4 measurement ID, Google Ads conversion ID, or Tiendanube storefront URL is in the repository at this time. Hence conversion reporting has **not** been activated. No ads or external accounts were modified.

## 4. WhatsApp only for Regalos

The circular floating WhatsApp button is present **only on `regalos.html`**.

`tracking.js` is now loaded only on `regalos.html`. When its button is clicked, a local browser `dataLayer` event named `mokka_whatsapp_click` is emitted with placement and page labels, or `whatsapp_click` via direct `gtag` if configured. This is **an enquiry lead, not a purchase**, and isn't currently sent to a Mokka analytics account because no GA4/GTM ID is connected.

## 5. Pilot operations

For 20–30 orders, record actual courier cost, customer shipping charge, order subtotal, ship date/time, attempted vs completed delivery, origin channel and area, delivery duration, and failed shipment causes. Use these **actual** costs to update the illustrative three-zone delivery guide.
