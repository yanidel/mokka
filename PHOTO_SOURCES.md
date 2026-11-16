# Mokka — fotos de referencia y atributos (16 noviembre 2026)

## Importante
- El sitio de prueba **muestra diez fotos de producto de referencia**, algunas cargadas desde fuentes externas y dos assets ya incorporados al repositorio. **No se han descargado ni copiado al repositorio las ocho fotos de terceros.** Se enlazan desde sus ubicaciones públicas como prueba de diseño, sujetas a licencia/autorización para uso comercial.
- No interpretar una foto de referencia como prueba de que Mokka tiene esa variedad, presentación, paquete o precio en stock.
- Reemplazar todas las imágenes con material autorizado y fotografías provistas por las marcas antes de lanzar el e-commerce.
- "Catamarqueños" y "Tucumanos" se representan **como categorías regionales**, no como marcas confirmadas; los ejemplos *El Rodeo* y *Alfajores del Tucumán* NO están confirmados como proveedores de Mokka.
- **Isla del Sabor** es la marca confirmada por el usuario. La variedad precisa y el stock aún deben verificarse.
- La clasificación de relleno `membrillo` en el filtro incluye frutas como pera; podría renombrarse `frutales` en la versión definitiva.

## Referencias visuales

| Etiqueta Mokka | Foto de referencia | Fuente del producto | Estado |
| --- | --- | --- | --- |
| Merengo | https://acdn-us.mitiendanube.com/stores/001/390/554/products/121-bcd2af953701cf7c6916035891072508-480-0.png | https://alfajoresmerengo.com/productos/ | Externa, permiso pendiente |
| Arocense | https://elsantafesino.com/wp-content/uploads/ALFAJOR-AROCENSE-1.jpg | https://elsantafesino.com/arocena-ya-esta-lista-para-su-2-fiesta-del-alfajor-arocense-100-santafesino/ | Externa, permiso pendiente |
| Las Dos Rosas | https://acdn-us.mitiendanube.com/stores/006/727/377/products/diseno-sin-titulo-53-15e15ef16d153cd4ef17627929345099-480-0.webp | https://listado.mercadolibre.com.ar/alfajores-las-dos-rosas | Externa, permiso pendiente |
| Isla del Sabor | https://acdn.mitiendanube.com/stores/001/147/879/products/9-cd84f162d2a1f80b1b17072577643518-640-0.png | https://www.royalonline.com.ar/productos/la-isla-del-sabor-alf-santafesino-x12-400g/ | Marca confirmada; producto exacto por verificar |
| Saboreé | assets/brands/saboree/alfajores.avif | https://www.alfajor-argentino.com.ar/p-473_alfajor_sabore | Asset generado desde referencia proporcionada; validar uso |
| La Quinta | https://www.alfajor-argentino.com.ar/116/alfajor-la-quinta-chocolate-blanco.jpg | https://www.alfajoreslaquinta.com/tienda/ | Externa, permiso pendiente |
| El Cordobés | https://www.alfajoreslaquinta.com/wp-content/uploads/pera.jpg | https://www.alfajoreslaquinta.com/nuestras-marcas/el-cordobes/ | Externa, permiso pendiente |
| Zafarrancho | assets/brands/zafarrancho/alfajor.avif | https://miradaargentina.com.ar/contenido/724/esto-es-un-zafarrancho-muy-serio | Asset generado desde referencia proporcionada; validar uso |
| Catamarqueños | https://cdn.tasteatlas.com/images/products/53d347e7f9244415a2e5afdc189068c3.jpg?mw=670 | https://www.tasteatlas.com/el-rodeo-alfajor-de-cayote | Referencia regional El Rodeo, fabricante NO confirmado |
| Tucumanos | https://alfajoresdeltucuman.com.ar/img/productos/pack-chocolate.webp | https://alfajoresdeltucuman.com.ar/productos | Referencia regional Alfajores del Tucumán, fabricante NO confirmado |

## Atributos verificados por variedad
Las reglas del recomendador están almacenadas en `app.js` para:
- **Textura**: suave, capas finas, maicena
- **Relleno**: dulce de leche, fruta/membrillo, cayote, pistacho
- **Cobertura**: chocolate, chocolate blanco, merengue, glaseado/almíbar

Los filtros se aplican por **variedad individual**, no por marca completa. Dentro de cada grupo hay selección múltiple (O); entre grupos se exige coincidencia conjunta (Y). La ausencia de una etiqueta no implica que el producto no tenga esa característica; significa que no se verificó.

## Antes de pasar a Tiendanube
1. Pedir al distribuidor: listado de SKUs, variedad, EAN, descripción, gramaje, precio, stock, fotos de producto y permisos de imágenes.
2. **Isla del Sabor** confirmada como marca. Identificar los fabricantes de `Catamarqueños` y `Tucumanos`, aún desconocidos.
3. Guardar fotos oficiales con permiso en la tienda, no depender de hotlinks de terceros.
4. Sustituir la lista de favoritos de la demo por carrito y checkout reales de Tiendanube.
