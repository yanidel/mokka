# Mokka — producto individual en Tiendanube (temas clásicos)

Esta carpeta contiene un **adaptador de diseño** para el detalle de producto de **Tiendanube Classic / Base-compatible** (Twig/TPL). Se basa en la documentación oficial:

- https://docs.tiendanube.com/help/templates-producttpl
- https://docs.tiendanube.com/help/snipplets
- https://tiendanube.dev/es-AR/themes/classic-themes/theme-architecture/configuration

**No se debe confundir con una tienda Tiendanube implementada:** este repositorio Mokka contiene un sitio estático y **no trae el tema completo ni una conexión a la tienda del comerciante**. Se requiere copiar/mezclar estos archivos en la plantilla real; no alcanzan para un ZIP instalable por sí solos. Algunos temas modifican mucho los snipplets, por lo que hay que verificar compatibilidad antes de sustituir `product.tpl`.

## Contenido

1. `templates/product.tpl`: layout Mokka para un producto, que conserva el contenedor y las clases críticas:
   - `#single-product`
   - `.js-has-new-shipping`, `.js-product-detail`, `.js-product-container`, `.js-shipping-calculator-container`
   - `data-variants="{{ product.variants_object | json_encode }}"`
   - Vista de productos relacionados y contenedor `#reviewsapp`
2. `snipplets/mokka-product-traits.tpl`: **Textura, Relleno y Cobertura** con las mismas etiquetas e íconos del buscador, leídas desde los tags nativos del producto (`product.tags`). Muestra “Por confirmar” cuando falta información.
3. `snipplets/mokka-product-benefits.tpl`: texto sobre entrega local y retiro; **no** implementa un método de envío ni controla tarifas.
4. `static/css/mokka-product.css`: estilos scoped a `.mokka-native-product` (mobile-first), sin sustituir `js-*` ni lógica de carrito.
5. [`PRODUCT_TAGS.md`](PRODUCT_TAGS.md): diccionario de **11 etiquetas exactas** y mapeo de las **21 fichas** del prototipo para la carga en Tiendanube.

## Instalación segura en un tema real

1. **Hacer backup** ZIP/FTP del tema instalado de Mokka y trabajar en una copia.
2. Revisar `templates/product.tpl` en el tema activo. Confirmar que existen:
   - `snipplets/product/product-image.tpl`
   - `snipplets/product/product-form.tpl`
   - `snipplets/product/product-related.tpl`
3. Copiar **ambos** archivos `snipplets/mokka-product-traits.tpl` y `snipplets/mokka-product-benefits.tpl` al directorio correspondiente del tema.
4. Copiar `static/css/mokka-product.css` a la carpeta de CSS estático del tema.
5. En el layout del tema que ya incluye el resto de CSS, agregar **una vez**:
   ```twig
   {{ 'css/mokka-product.css' | static_url | css_tag }}
   ```
6. Si el `product.tpl` original coincide con la estructura Base clásica, podés usar este diseño como base, **preservando del original cualquier app hook, fragmento condicional y acceso a valoraciones adicionales**. Si es diferente, **no reemplazarlo entero**: agregar la clase `mokka-native-product` al `#single-product` existente, adaptar la clase `mokka-native-product__layout` a su row, `mokka-native-product__images` al contenedor de imágenes, `mokka-native-product__purchase` al de compra, e incluir **después de** su formulario nativo primero el snipplet de atributos y luego el de beneficios.
7. Nunca insertar un formulario paralelo de compra. `product-form.tpl` maneja precio, impuestos visibles, variaciones, descuentos, medios de pago, disponibilidad, cantidad, calculador de envíos y botón **Agregar al carrito**.
8. Configurar productos en el administrador Tiendanube con título, fotos de la variedad específica, SKU, stock, precio por caja, variantes, peso y descripción. **Además, registrar las etiquetas exactas de Textura, Relleno y Cobertura de [`PRODUCT_TAGS.md`](PRODUCT_TAGS.md) solo después de validar cada variedad con el fabricante.** No importar precios del prototipo salvo que se validen contra los costos comerciales.
9. Configurar las reglas reales de envío express de Rosario en el administrador / app de envíos: $5.000 para pedidos bajo $100.000 en la zona habilitada, gratis desde $100.000, retiro sin costo; cutoff de las 21 h **solo si puede hacerse cumplir operativamente**.
10. Probar en staging como mínimo: producto con stock, agotado, con/sin precio visible, un producto con múltiples variantes, cantidad, sumar al carrito AJAX, checkout y pago, cálculo de envío en CP de Rosario y fuera de zona, cross-sells, y mobile.

## Límites reales

- La página `producto.html?id=...` en la raíz es una **vista previa estática** de 21 presentaciones e incluye precios de otras tiendas o inventados como estimaciones. No es una plantilla que la plataforma vaya a procesar.
- El archivo **`tiendanube/templates/product.tpl` sí está escrito en Twig/TPL compatible con la estructura Base**, pero no se puede certificar su funcionamiento en cualquier tema ni en Mokka sin tener el tema real y probarlo dentro de Tiendanube.
- En la tienda Tiendanube los precios y el stock deben salir de `product`, procesados por los snipplets nativos; no hay que cargar `catalog-data.js`, `app.js` ni `producto.js` como código de compra.
- Las imágenes externas del prototipo no son activos comerciales aprobados. Reemplazarlas con fotos oficiales de cada SKU.
- El WhatsApp de Mokka queda restringido a la página de **Regalos**; no agregar un botón flotante a las páginas de compra.

### Validación de etiquetas

Probar un producto con una etiqueta por grupo (`textura:capas`, `relleno:ddl`, `cobertura:merengue`), otro con varias etiquetas de relleno, y otro sin etiquetas. Verificar que la página muestre los mismos nombres que el buscador, que los grupos vacíos muestren “Por confirmar” y que el formulario nativo de compra siga funcionando. Las etiquetas deben venir del campo **Tags** de cada producto, no de JavaScript estático del prototipo. Tiendanube documenta `product.tags` como arreglo de etiquetas ([Product](https://docs.tiendanube.com/help/product)).
