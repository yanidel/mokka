# Mokka — Rosario delivery pilot and ecommerce conversion tracking

Updated 2026-11-17: all customer purchases will take place in **Tiendanube**. **WhatsApp is reserved exclusively for Regalos, cestas e instituciones**.

## 1. Rosario express shipping rates (Mokka customer policy)

Origin: Mokka's shop at Terminal de Rosario (open 24 hours). Same-day express order cutoff **21:00**, conditional on courier availability.

| Fulfilment option | Eligible order value | Customer delivery charge |
| --- | --- | --- |
| Express within Mokka's enabled Rosario coverage | Below ARS $100,000 | **ARS $5,000** |
| Express within Mokka's enabled Rosario coverage | **ARS $100,000 or more** | **FREE** |
| Pickup at the Terminal | Any amount | **FREE** |

This is a **Mokka price policy**, not a quote or contract from Uber or any other courier. Mokka bears actual courier costs above customer charges. Validate actual margin and allowable geographic coverage before offering in the live Tiendanube checkout. Do **not** promise same-day delivery outside the operating cutoff, or where courier supply is unavailable.

The three site cards display these prices, replacing distance-tiered $4,000–$12,000 third-party estimates. Those old estimates should not be shown as customer shipping prices.

### Configure in Mokka's Tiendanube checkout

Tiendanube supports custom delivery with a fixed amount, free shipping options, restrictions by region/distance and **range of cart value**:
https://ayuda.tiendanube.com/es_AR/envios-personalizados/como-ofrecer-otros-envios-o-entregas-personalizadas
https://ayuda.tiendanube.com/es_AR/envio-gratis/como-crear-un-envio-o-entrega-personalizada-gratis

Set up:
1. "Entrega express Rosario" with cost **ARS $5,000**, only for eligible Rosario local addresses and orders **below $100,000**.
2. "Entrega express Rosario GRATIS desde $100.000" with zero cost, same eligible Rosario coverage and order **$100,000 or more**.
3. "Retiro en Terminal de Rosario" at zero cost (with location/instructions), only if fulfilment operations are ready.
4. Express order cutoff **21:00**, with fulfilment capacity and availability gating. If checkout can't enforce cutoff natively, use a verified scheduling solution before promising same-day service.
5. Test at exactly $99,999 and $100,000, multiple Rosario and out-of-area postcodes, pickup and after-cutoff checkout. Ensure only the correct delivery method is shown.

These operations are **documented**, not yet applied to a Tiendanube account. The prototype does not take actual payments.

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
