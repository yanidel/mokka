# Mokka — Rosario delivery pilot and WhatsApp ad measurement

Updated: 2026-11-17.

## 1. Published Rosario courier pricing reference (not Uber)

Origin is Mokka's physical shop at Terminal de Ómnibus Mariano Moreno, Rosario.

Public price reference: **Punto a Punto**, https://www.empreya.com.ar/puntoapunto/index.php
- Up to **5 km: ARS $4,000**
- Beyond 5 km: **ARS $800 per additional km**
- The provider's website also notes a service operating window and courier availability restrictions.
- No commercial agreement with Mokka has been entered into by this change. Fares may change and extra fees or restrictions may apply.

**Three website illustration zones (measured by road distance, not radius):**

| Band | Distance | Indicative amount |
| --- | --- | --- |
| 1, short trip | Up to 5 km | $4,000 |
| 2, medium | >5 to 10 km | >$4,000 to $8,000 |
| 3, extended | >10 to 15 km | >$8,000 to $12,000 |

A distance exactly at 5, 10 or 15 km will use the tariff formula. No claim is made that Uber Envíos, which quotes fares dynamically, will charge these amounts. Mokka must confirm a **specific price, availability, and ETA** before accepting the order. Outside 15 km: consult. Do not advertise '60 minutes guaranteed' or free delivery.

Other benchmarks worth evaluating:
- [Rayo Cadetería](https://www.rayocadeteriarosario.com.ar/): on-page distance calculator.
- [Motomensajería Rosario](https://motomensajeria.net.ar/rosario): lists an on-demand individual delivery minimum of $10,000, and a separate minimum for batched ecommerce jobs. Verify actual applicability.

The three delivery cards on `rosario.html` link to WhatsApp with a different pre-filled zone inquiry. **No prepaid shipping charge is implemented** in this static prototype.

## 2. WhatsApp lead measurement is instrumented, not yet transmitting to GA4

`tracking.js` is loaded by `index.html`, `delicatessen.html`, `regalos.html`, and `rosario.html`.

Every click on a link to `wa.me`, `www.wa.me`, or `api.whatsapp.com` creates a synchronous browser `dataLayer` event:

```javascript
{
  event: "mokka_whatsapp_click",
  button_location: "shipping_zone", // e.g. floating_button, rosario_hero, rosario_cta
  page_section: "rosario",           // or alfajores_y_dulces/delicatessen/regalos
  delivery_zone: "5_10km"            // or hasta_5km/10_15km/not_selected
}
```

When a **direct** Google tag `gtag` is present **without** a GTM container, the script instead also sends `gtag("event","whatsapp_click",parameters)`. With Google Tag Manager present, the Custom Event `mokka_whatsapp_click` can trigger a **single** GA4 event tag called `whatsapp_click`. Do not configure both simultaneously or events may be duplicated.

No Mokka-owned measurement ID (a `G-...` ID) or GTM container ID (`GTM-...`) is presently configured in this repository. **Hence events are NOT yet visible in GA4 or Google Ads.** Do not reuse GA4/GTM identifiers belonging to Hekyän or any other business.

### To activate with GTM + GA4

1. Create/locate a **Mokka** GA4 property and a Mokka GTM web container. Install the GTM container snippet on all four pages.
2. In GTM, configure the Google tag to send page views to Mokka's GA4 property.
3. Add **Custom Event trigger** named `mokka_whatsapp_click`.
4. Create a GA4 Event tag `whatsapp_click` that uses this trigger. Map the three data-layer variables as event parameters: `button_location`, `page_section`, and `delivery_zone`.
5. Preview the GTM container with Tag Assistant; load `/rosario?utm_source=google&utm_medium=cpc&utm_campaign=rosario_express`; click the floating WhatsApp button and each zone button separately. Confirm **one** `whatsapp_click` event per click, carrying the correct `delivery_zone` and page.
6. Publish GTM. Check **GA4 Realtime / DebugView**. In GA4 Admin, mark `whatsapp_click` as a key event; connect Mokka's Google Ads account and import this event as a lead conversion.
7. Initially treat WhatsApp clicks as **leads, not sales**. Set it to secondary/observation unless the ads are intentionally optimizing for enquiries, because a click does not prove a message was sent or an order was placed.

For Meta ads, use UTM parameters and a Meta Pixel / Conversions API setup associated **with Mokka**, not an unrelated brand.

### Example campaign destination URLs

- Google Ads: `https://kaz.netlify.app/rosario?utm_source=google&utm_medium=cpc&utm_campaign=rosario_express`
- Instagram: `https://kaz.netlify.app/rosario?utm_source=instagram&utm_medium=paid_social&utm_campaign=rosario_express`

Netlify's `_redirects` file maps `/rosario` to `rosario.html`. Confirm the actual deployed URL before paying for traffic.

### What the script does **not** claim

- Does not prove WhatsApp opened successfully or a message was sent.
- Does not read or transmit destination addresses, phone numbers, or prefilled WhatsApp messages as analytics parameters.
- Does not create a GTM container, GA4 property, Ads conversion action, or live tracking without the respective account IDs and GTM publication.
- Does not dispatch delivery requests or integrate Uber API.

## 3. Daily pilot measurement

Collect: date, origin of lead (Google/Instagram/organic), selected delivery zone, courier used, actual quote in ARS, charged customer shipping in ARS, actual delivery cost, delivered yes/no, order subtotal, failed/no-stock quotes. After 20–30 shipments, adjust site zone price guide using real medians and identify the point at which a dedicated courier agreement saves money.
