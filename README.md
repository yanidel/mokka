# Mokka — sitio de prueba

Tienda de alfajores y delicatessen: prototipo **HTML/CSS/JavaScript** independiente, pensado para adaptar a Tiendanube. Español de Argentina; diseño premium con marfil, azul oscuro y caramelo.

## Previsualización

Abrí `index.html` o publicá `main` en Netlify o GitHub Pages. La publicación automática depende de la configuración del hosting; actualizar el repositorio **no confirma** que se haya publicado el deploy.

## Catálogo de investigación (16 noviembre 2026)

Las 10 etiquetas elegidas para navegar son:

1. Merengo
2. Arocense
3. Las Dos Rosas
4. La Isla
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

La Isla está ilustrada con productos de "La Isla del Sabor" **a confirmar con el proveedor**. Los ejemplos de Catamarca y Tucumán muestran productos de terceros como **referencia regional**: no implican que el distribuidor venda esos fabricantes.

## Archivos principales

- `index.html`: estructura, diez tarjetas y formulario de preferencias.
- `styles.css`: responsive y aspecto premium.
- `app.js`: variedades investigadas, atributos, buscador y favoritos.
- `PHOTO_SOURCES.md`: procedencia de imágenes y fuentes, con limitaciones.
- `assets/mokka-logo-premium.svg`: logo para el test.
- `assets/brands/`: imágenes anteriores optimizadas en AVIF.

## Adaptación futura a Tiendanube

Necesita inventario real: marcas, variedades, EAN/SKU, fotos con derechos, presentación, gramaje, precios y stock. Estos metadatos serán la base de los filtros. Reemplazar favoritos por carrito/checkout nativos de Tiendanube y comprobar la compra en staging. No hay tokens ni credenciales en este prototipo.
