# Mokka — sitio de prueba

Tienda de alfajores y delicatessen: prototipo **HTML/CSS/JavaScript** independiente, pensado para adaptar a Tiendanube. Español de Argentina; diseño premium con marfil, azul oscuro y caramelo.

## Zafarrancho: sección de accesorios separados de los alimentos

- El catálogo oficial de Zafarrancho tiene **cinco presentaciones de alfajores** y solo **dos productos no alfajores**: **Gorra Mundial ($10.000)** y **Stickers DTF UV ($5.000)**. No se encontraron alimentos adicionales para Delicatessen.
- `delicatessen.html#zafarrancho` muestra **Modo Zafarrancho · Accesorios de marca** fuera del catálogo de Merengo; no se mezclan las gorras y stickers con las categorías alimenticias.
- `zafarrancho-data.js` incluye los dos productos con enlaces oficiales, variantes de gorra y referencias de precio. Se integran a `delicatessen-producto.html?id=...` con páginas individuales y compra deshabilitada.
- Las fotografías de accesorios no se insertaron porque no se verificaron URLs de imágenes estables. Se usan **placeholders explícitos**, con acceso a las fotos del fabricante en cada ficha.
- [Investigación y fuentes oficiales](ZAFARRANCHO_EXTRAS.md). La inclusión comercial de accesorios y sus precios requiere confirmación y carga de productos en Tiendanube.

## Delicatessen: catálogo Merengo sin alfajores (17 noviembre 2026)

- La landing `delicatessen.html` conserva su hero con Toblerone, pero ya **no** tiene las tarjetas genéricas de demostración. Ahora muestra **11 productos reales de Merengo**, con fotografías oficiales como referencias, presentación, descripción, etiquetas y precios online.
- **Tres categorías funcionales:** Bocaditos (4), Bañados en chocolate (6, incluyendo garrapiñadas y bombones de fruta), Dulce de leche (1), además de buscador y enlaces a fichas individuales.
- `delicatessen-data.js`: los 11 registros y URLs de fuentes; `delicatessen.js`: navegación por categorías y búsqueda; `delicatessen-producto.html` y `delicatessen-producto.js`: páginas individuales de la línea gourmet.
- Los precios son los **publicados por Merengo**, no los precios comerciales aprobados de Mokka. Las fotos se enlazan desde el sitio de Merengo y requieren permiso de uso en producción. No hay stock ni checkout en esta maqueta.
- [Ver precios, referencias y categorías para crear en Tiendanube](DELICATESSEN_MERENGO.md). La categoría oficial de Merengo *Pan dulces y budines* no presenta productos actuales publicados y por eso no se agregaron SKUs estacionales inventados.
- Solo se usa WhatsApp en la página Regalos; todos los pedidos del resto se realizarán mediante Tiendanube cuando esté conectado.

## Navegación principal renovada (noviembre de 2026)

El encabezado de las **seis páginas** tiene tres accesos principales —**Alfajores, Delicatessen y Regalos**— con sus enlaces desplegables. El botón **Tu alfajor ideal ↗** es una CTA azul marino separada del resto. En teléfonos, el menú hamburguesa incluye las tres categorías con acordeones, la CTA y un enlace discreto a **Entrega express en Rosario**.

- `navigation.js` gestiona la apertura y cierre por hover/foco/clic en escritorio; botones de acordeón en móvil; cierre con Escape, fuera del menú y al navegar, y atributos `aria-expanded`.
- Los nombres principales siguen siendo **enlaces directos** a su landing (`index.html`, `delicatessen.html`, `regalos.html`); las flechas independientes abren los submenús. Sin menús muertos.
- **Alfajores:** marcas, catálogo y marcas específicas. `app.js` acepta `?marca=Merengo`, `?marca=Zafarrancho` o `?marca=Saboreé` y activa el filtro al entrar. Cambiar/restablecer la marca actualiza la URL sin perder parámetros de campaña.
- **Delicatessen:** filtros de Bocaditos, Bañados en chocolate, Dulce de leche y Modo Zafarrancho. `delicatessen.js` ya interpreta `?categoria=...`.
- **Regalos:** regalos personales, cestas gourmet, empresas e instituciones, y todas las propuestas.
- `app.js` y `pages.js` ya no agregan listeners duplicados al menú hamburguesa. Se utiliza el mismo menú compartido en ambas familias de páginas.
- La franja existente de Rosario permanece independiente. El WhatsApp solo sigue apareciendo en Regalos.

## Navegación del sitio (noviembre de 2026)

Tres páginas HTML separadas con navegación compartida en escritorio y móvil:

| Página | Archivo | Hero / enlace principal |
| --- | --- | --- |
| Alfajores y dulces | `index.html` | Catálogo regional y buscador de alfajores; segundo botón del hero: **Delicatessen ↗** |
| Delicatessen | `delicatessen.html` | Introducción premium a la sección gourmet (selección en preparación); segundo botón: **Dulces ↗** |
| Regalos, cestas e instituciones | `regalos.html` | Regalos personales, cestas y opciones corporativas/institucionales; entrada propia en el menú |

`pages.js` controla el menú móvil de Delicatessen, Regalos y Rosario, y permite **copiar** un borrador de consulta de regalos sin almacenar ni enviar datos. `app.js` sigue operando el buscador, los filtros y los favoritos de `index.html`, usando la base común `catalog-data.js`. Las tres páginas comparten `styles.css` y el logo.

Los enlaces son **relativos** (`index.html`, `delicatessen.html`, `regalos.html`) para que el sitio funcione publicado como raíz o bajo una subcarpeta de GitHub Pages. No hay pasarela de pago ni formulario conectado a un servidor en este prototipo. El botón flotante de WhatsApp aparece **solo en `regalos.html`**.

### Fotografía ilustrativa (secciones nuevas)

- Delicatessen: hero original generado para Mokka de un **Toblerone abierto** (chocolate triangular y envoltorio amarillo), optimizado en WebP de 1200 × 800 px como `assets/hero/toblerone-open.webp`; se dimensiona igual que el hero de Alfajores en desktop y mobile. Imagen ilustrativa, no prueba stock, presentación ni relación oficial con la marca.
- Regalos: fotografía ilustrativa de chocolates para regalo de Eunkwang Choi, publicada con licencia Unsplash: https://unsplash.com/photos/p4E1o15SQqc
- Las imágenes de estas dos secciones **no representan stock confirmado de Mokka**. Deberán sustituirse por fotos autorizadas de los productos reales para el lanzamiento.

## Landing de Rosario — campaña local (noviembre 2026)

- **`rosario.html`**: landing específica para anuncios dirigidos a Rosario. Hero fotográfico con enlace al catálogo online (preparado para Tiendanube), propuesta de entrega express, retiro coordinado en la Terminal, referencias de marcas y preguntas frecuentes.
- **Precios de entrega para Rosario:** $5.000 express dentro de la zona habilitada, **gratis desde $100.000 de compra** y retiro gratuito en la Terminal. Pedidos express hasta las 21 h, sujetos a disponibilidad. Son los precios comerciales previstos para Mokka y no las tarifas reales cobradas por cadeterías; aún hay que configurarlos en la Tiendanube de Mokka.
- **`_redirects`**: alias `/rosario` → `/rosario.html` para Netlify. En GitHub Pages se accede usando `rosario.html`.
- El sitio general mantiene las tres páginas de categoría. La portada incluye un vínculo discreto a entrega express en Rosario y los otros enlaces están en anuncio, menú móvil y pie.
- **Compras**: los pedidos de Alfajores y dulces, Delicatessen y Rosario se harán mediante Tiendanube, NO por WhatsApp. En el prototipo actual los enlaces muestran el catálogo de prueba, sin pagos. Se requiere conectar el URL real de Mokka en `shop-links.js` y luego el checkout de Tiendanube. El local de la Terminal abre 24 horas; el horario anunciado para pedidos express es hasta las 21 h y está sujeto a mensajería.
- **Publicidad**: dirigir anuncios locales a `/rosario?utm_source=...&utm_campaign=...`; configurar GA4/Meta Pixel en la tienda Tiendanube y medir compras reales, no clics de WhatsApp. El enlace a tienda (cuando se configura) arrastra parámetros UTM y click IDs de campaña. El sitio no incorpora códigos publicitarios nuevos ni activa campañas por sí mismo.
- **Para habilitar ventas automatizadas**: definir la URL oficial de Mokka en `shop-links.js`, conectar catálogo, stock, precios y checkout de Tiendanube, y configurar entrega express ($5.000 para pedidos menores de $100.000; gratis desde $100.000), retiro sin cargo, cobertura y horarios en el checkout.

## Previsualización

Abrí `index.html` o publicá `main` en Netlify o GitHub Pages. La publicación automática depende de la configuración del hosting; actualizar el repositorio **no confirma** que se haya publicado el deploy.

## Catálogo de investigación (16 noviembre 2026)

Las 10 etiquetas elegidas para navegar son:

1. Merengo
2. Arocense
3. Las Dos Rosas
4. Isla del Sabor (**marca confirmada por el distribuidor**)
5. Saboreé
6. La Quinta
7. El Cordobés
8. Zafarrancho
9. Catamarqueños (**estilo regional; fabricante por confirmar**)
10. Tucumanos (**estilo regional; fabricante por confirmar**)

`app.js` contiene 20 registros de **variedades documentadas**, no SKUs activos. Ver `PHOTO_SOURCES.md` para fuentes y fotos utilizadas.

### Cómo funciona el recomendador

- **Textura:** suave, capas finas, maicena.
- **Relleno:** dulce de leche, fruta/membrillo (incluye pera), cayote, pistacho.
- **Cobertura:** chocolate, chocolate blanco, merengue, glaseado/almíbar.
- Permite seleccionar varias opciones dentro de cada grupo y combina grupos con una coincidencia conjunta.
- Busca por nombre de marca, producto, región y atributo.
- Los resultados muestran fuentes públicas y etiquetas; si la foto no carga muestra un aviso, nunca otra marca disfrazada.

### Favoritos

El icono superior abre una **lista de interés local al navegador**. No es un carrito de compra y no indica precio, inventario ni posibilidad de compra. El formulario de email también es ilustrativo.

## Sobre las fotos

Las fotos de **Zafarrancho** y **Saboreé** ya estaban guardadas en el repositorio como archivos AVIF, basados en referencias suministradas. Las otras ocho imágenes están **enlazadas desde sus páginas públicas de origen**, NO copiadas al repositorio. Esta dependencia puede hacer que algunos enlaces o fotos dejen de funcionar; antes de lanzar, solicitar archivos oficiales y derechos de publicación a las marcas.

**Isla del Sabor** fue confirmada como la marca a la que se refería el distribuidor al decir "La Isla". Los ejemplos de Catamarca y Tucumán muestran productos de terceros como **referencia regional**: los fabricantes de los productos que vende el distribuidor siguen sin identificar.

## Archivos principales

- `index.html`: estructura, diez tarjetas y formulario de preferencias.
- `styles.css`: responsive y aspecto premium.
- `app.js`: variedades investigadas, atributos, buscador y favoritos.
- `PHOTO_SOURCES.md`: procedencia de imágenes y fuentes, con limitaciones.
- `assets/mokka-logo-premium.svg`: logo para el test.
- `assets/brands/`: imágenes anteriores optimizadas en AVIF.

## Adaptación futura a Tiendanube

Necesita inventario real: marcas, variedades, EAN/SKU, fotos con derechos, presentación, gramaje, precios y stock. Estos metadatos serán la base de los filtros. Reemplazar favoritos por carrito/checkout nativos de Tiendanube y comprobar la compra en staging. No hay tokens ni credenciales en este prototipo.

## Catálogo de 21 presentaciones y detalle individual

- `catalog-data.js` contiene la información, las fotos ilustrativas y los **precios con su origen** para las 21 fichas: **1 precio definido por Mokka, 12 referencias online y 8 estimaciones**.
- `app.js` renderiza los 21 productos con su presentación, precio y etiqueta de procedencia. Cada ficha tiene enlace a `producto.html?id=...`.
- `producto.html` + `producto.js`: vista previa individual mobile-first, con imagen de referencia, descripción, caja/estuche, precio, procedencia del precio, cantidad, total de prueba, favoritos, entregas Rosario y productos relacionados.
- Las 8 estimaciones se indican como **precios no verificados**, inventados para probar la experiencia; no son ofertas ni precios comerciales autorizados. Las fuentes y cada importe se documentan en [PRICE_RESEARCH.md](PRICE_RESEARCH.md).
- **Merengo x12 $28.000** es el único precio de venta definido previamente por Mokka; los demás son referencias de terceros o propuestas de prueba. La existencia de un precio online **no prueba** que el proveedor de Mokka ofrezca ese empaque.
- Las páginas de prueba **no tienen checkout**. El precio, el stock, la foto y las variantes reales se deben cargar en Tiendanube y el tema usará los valores nativos del objeto `product`.

## Adaptador de producto para el tema Tiendanube

Incluí archivos de integración en [tiendanube/](tiendanube/README.md): `templates/product.tpl`, `snipplets/mokka-product-benefits.tpl` y `static/css/mokka-product.css`. El template usa los snipplets **nativos** de imagen y compra (`product-image.tpl` / `product-form.tpl`) y conserva los hooks JavaScript críticos del tema Base.

**No es un ZIP completo ni se instaló en la tienda**: hay que fusionar el adaptador con los archivos reales del tema Mokka, y probar imágenes, variantes, stock, añadir al carrito, carrito AJAX, pagos y envíos. No sobrescribir a ciegas un `product.tpl` personalizado.

## Conexión a la tienda real

Editá `shop-links.js` y asigná **la URL real del catálogo de Mokka en Tiendanube** a `MOKKA_TIENDANUBE_CATALOG_URL`. Los botones marcados `data-shop-link` de la portada y de la landing Rosario pasarán automáticamente a esa dirección, conservando parámetros UTM y click IDs. Mientras la URL esté vacía, se abre el catálogo ilustrativo de `index.html`, **sin checkout**. Nunca usar la URL de otra empresa.

El WhatsApp se reserva para **Regalos, cestas e instituciones**; `tracking.js` únicamente se carga en `regalos.html` para instrumentar consultas de regalos. Las compras del resto deben medirse mediante las integraciones de GA4 y Ads de Tiendanube.
