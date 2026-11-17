# Mokka — sitio de prueba

Tienda de alfajores y delicatessen: prototipo **HTML/CSS/JavaScript** independiente, pensado para adaptar a Tiendanube. Español de Argentina; diseño premium con marfil, azul oscuro y caramelo.

## Navegación del sitio (noviembre de 2026)

Tres páginas HTML separadas con navegación compartida en escritorio y móvil:

| Página | Archivo | Hero / enlace principal |
| --- | --- | --- |
| Alfajores y dulces | `index.html` | Catálogo regional y buscador de alfajores; segundo botón del hero: **Delicatessen ↗** |
| Delicatessen | `delicatessen.html` | Introducción premium a la sección gourmet (selección en preparación); segundo botón: **Dulces ↗** |
| Regalos, cestas e instituciones | `regalos.html` | Regalos personales, cestas y opciones corporativas/institucionales; entrada propia en el menú |

`pages.js` controla el menú móvil de Delicatessen, Regalos y Rosario, y permite **copiar** un borrador de consulta de regalos sin almacenar ni enviar datos. `app.js` sigue operando únicamente el buscador, los filtros y la lista local de favoritos de `index.html`. Las tres páginas comparten `styles.css` y el logo.

Los enlaces son **relativos** (`index.html`, `delicatessen.html`, `regalos.html`) para que el sitio funcione publicado como raíz o bajo una subcarpeta de GitHub Pages. No hay pasarela de pago ni formulario conectado a un servidor en este prototipo. El botón flotante de WhatsApp aparece **solo en `regalos.html`**.

### Fotografía ilustrativa (secciones nuevas)

- Delicatessen: fotografía ilustrativa de una caja de chocolates de Madeline Liu, publicada con licencia Unsplash: https://unsplash.com/photos/Fzu0ot7AThE
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

## Conexión a la tienda real

Editá `shop-links.js` y asigná **la URL real del catálogo de Mokka en Tiendanube** a `MOKKA_TIENDANUBE_CATALOG_URL`. Los botones marcados `data-shop-link` de la portada y de la landing Rosario pasarán automáticamente a esa dirección, conservando parámetros UTM y click IDs. Mientras la URL esté vacía, se abre el catálogo ilustrativo de `index.html`, **sin checkout**. Nunca usar la URL de otra empresa.

El WhatsApp se reserva para **Regalos, cestas e instituciones**; `tracking.js` únicamente se carga en `regalos.html` para instrumentar consultas de regalos. Las compras del resto deben medirse mediante las integraciones de GA4 y Ads de Tiendanube.
