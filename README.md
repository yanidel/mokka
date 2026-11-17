# Mokka — sitio de prueba

Tienda de alfajores y delicatessen: prototipo **HTML/CSS/JavaScript** independiente, pensado para adaptar a Tiendanube. Español de Argentina; diseño premium con marfil, azul oscuro y caramelo.

## Navegación del sitio (noviembre de 2026)

Tres páginas HTML separadas con navegación compartida en escritorio y móvil:

| Página | Archivo | Hero / enlace principal |
| --- | --- | --- |
| Alfajores y dulces | `index.html` | Catálogo regional y buscador de alfajores; segundo botón del hero: **Delicatessen ↗** |
| Delicatessen | `delicatessen.html` | Introducción premium a la sección gourmet (selección en preparación); segundo botón: **Dulces ↗** |
| Regalos, cestas e instituciones | `regalos.html` | Regalos personales, cestas y opciones corporativas/institucionales; entrada propia en el menú |

`pages.js` controla el menú móvil de Delicatessen y Regalos, y permite **copiar** un borrador de consulta de regalos sin almacenar ni enviar datos. `app.js` sigue operando únicamente el buscador, los filtros y la lista local de favoritos de `index.html`. Las tres páginas comparten `styles.css` y el logo.

Los enlaces son **relativos** (`index.html`, `delicatessen.html`, `regalos.html`) para que el sitio funcione publicado como raíz o bajo una subcarpeta de GitHub Pages. No hay pasarela de pago ni formulario conectado a un servidor.

### Fotografía ilustrativa (secciones nuevas)

- Delicatessen: fotografía ilustrativa de una caja de chocolates de Madeline Liu, publicada con licencia Unsplash: https://unsplash.com/photos/Fzu0ot7AThE
- Regalos: fotografía ilustrativa de chocolates para regalo de Eunkwang Choi, publicada con licencia Unsplash: https://unsplash.com/photos/p4E1o15SQqc
- Las imágenes de estas dos secciones **no representan stock confirmado de Mokka**. Deberán sustituirse por fotos autorizadas de los productos reales para el lanzamiento.

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
