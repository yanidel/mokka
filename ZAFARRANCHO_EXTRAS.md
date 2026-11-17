# Zafarrancho — productos no alfajores en Mokka (17/11/2026)

## Qué vende Zafarrancho fuera de los alfajores

Revisé el **catálogo completo de la tienda oficial**: https://www.zafarrancho.ar/productos/ y su categoría https://www.zafarrancho.ar/merch/.

Zafarrancho publica 7 fichas en total: 5 variedades/presentaciones de alfajores y **solo dos productos ajenos a los alfajores**, ambos accesorios. **No aparecen golosinas, bocaditos, chocolate en tableta ni dulce de leche bajo la marca Zafarrancho.** Por ese motivo **no** inventamos una línea de Delicatessen comestible.

| Sección creada en la maqueta | Producto | Presentación / variantes | Precio minorista oficial | Ficha oficial |
| --- | --- | --- | ---: | --- |
| Modo Zafarrancho / Accesorios de marca | Gorra Zafarrancho Mundial | 1 gorra; estampa La Copa, Argentina, Zafarrancho o El Sol | **ARS $10.000** | https://www.zafarrancho.ar/productos/gorra-zafarrancho-mundial-1dsgn/ |
| Modo Zafarrancho / Accesorios de marca | Plancha de stickers DTF UV Identidad | 1 plancha de **10 × 15 cm** | **ARS $5.000** | https://www.zafarrancho.ar/productos/plancha-de-stickers-dtf-uv-edicion-identidad-zafarrancho-13md3/ |

**Gorra:** visera curva, color celeste y blanco, red trasera ajustable. Cuatro opciones de estampa según catálogo oficial.

**Stickers:** impresión DTF UV brillante con relieve; diseñados para superficies lisas, resistentes al agua según el fabricante.

## Qué se implementó en Mokka

- `delicatessen.html#zafarrancho`: sección **Modo Zafarrancho · Accesorios** separada del catálogo alimentario y de los filtros Merengo. Dos tarjetas con referencias de precio, descripción y botón de detalle.
- `zafarrancho-data.js`: fichas fuente, variantes y precios. **Los importes son los publicados por el fabricante, no precios comerciales autorizados de Mokka.**
- `delicatessen-producto.html?id=zaf-gorra-mundial` y `delicatessen-producto.html?id=zaf-stickers-identidad`: fichas individuales, usando el diseño que también usan los productos Merengo. Conservan el botón de compra deshabilitado hasta conectar Tiendanube, y el enlace a fotos/precio del fabricante.
- En esta revisión no pudimos establecer **URLs de fotografías oficiales estables** para integrarlas; por eso los dos ítems muestran un **símbolo claramente identificado como placeholder**, nunca una imagen inventada del producto. Hay enlaces a las fotos en su fuente.
- **No** se agregaron WhatsApp, stock inventado, un checkout independiente ni métodos de envío supuestamente habilitados.

## Antes de habilitar la tienda Tiendanube

Confirmar si Mokka comercializará accesorios (gorra y stickers), además de los alimentos. En caso afirmativo, crear **Accesorios / Modo Zafarrancho**, solicitar fotos autorizadas, obtener el costo mayorista, validar variantes SKU de estampa y stock por variante, determinar precio de venta, peso/dimensiones, envío y checkout nativo de Tiendanube.

No migrar estas dos referencias de precio a la tienda como precios de venta de Mokka sin aprobación. La línea **Alfajores Zafarrancho** ya está en el catálogo general de alfajores de Mokka y se mantiene allí, sin duplicarla en Delicatessen.
