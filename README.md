# Mokka — prototipo de e-commerce

Sitio de prueba para **Mokka**, una tienda de alfajores y delicatessen, creado en español rioplatense.

## Ver el prototipo

Es un sitio **estático**: no requiere instalaciones ni compilación. Abrí index.html en un navegador o publicalo con GitHub Pages/Netlify.

### GitHub Pages
1. Abrí **Settings → Pages** en este repositorio.
2. En **Build and deployment**, seleccioná **Deploy from a branch**.
3. Elegí **main** y **/(root)**; guardá los cambios.
4. Una vez que GitHub confirme la publicación, el sitio debería estar en https://yanidel.github.io/mokka/ (la URL puede no funcionar hasta que Pages esté habilitado).

## Qué funciona en esta versión

- Inicio responsive, con fotografía grande y diseño premium/divertido.
- Exploración por marcas: Merengo, Zafarrancho, La Quinta, Entre Dos, Havanna.
- Filtro interactivo **¿Cómo te gusta tu alfajor?**: esponjoso, mucho relleno, con merengue, bien chocolatoso, algo diferente (permite varias preferencias).
- Catálogo que se filtra por marca, preferencias y texto de búsqueda.
- Carrito de demostración con subtotal, eliminación y persistencia local en el navegador.
- Preparado para dispositivos móviles.

## Importante: solo un prototipo

**No hay procesamiento de pagos, pedidos, checkout, email ni stock.** Las variedades de producto, descripciones, atributos, valores en ARS, fotografías genéricas y rótulos de marca son **ejemplos visuales**. No confirman artículos reales de ninguna marca. El carrito es local al navegador. El formulario de email no almacena ni envía la dirección.

Las fotografías están vinculadas temporalmente desde Unsplash y se atribuyen a Abril Ventrice, Valentina Tamayo y sheri silver; reemplazarlas con fotografías de los productos que realmente se venderán antes del lanzamiento.

El logo SVG está trazado directamente desde la imagen de Mokka compartida en la conversación: assets/mokka-logo.svg. No confundir los nombres de marca estilizados en las tarjetas con logos oficiales.

## Estructura

- index.html — contenido y estructura de la página
- styles.css — estilos, diseño y breakpoints
- app.js — catálogo de ejemplo, filtro por marcas/preferencias, búsqueda y carrito
- assets/mokka-logo.svg — logotipo Mokka
- assets/brands/zafarrancho/alfajor.avif — fotografía ilustrativa optimizada de Zafarrancho
- assets/brands/santafesino/alfajor.avif — fotografía ilustrativa optimizada del estilo santafesino
- assets/brands/saboree/alfajores.avif — fotografía ilustrativa optimizada de Saborée

## Migración posterior a Tiendanube

Este proyecto es una **referencia de diseño y experiencia de usuario**; no es todavía un theme ZIP compatible con Tiendanube.

Para llevarlo a Tiendanube:
1. Transferir la estructura, colores, tipografías y componentes visuales al tema (templates + CSS + JS).
2. Reemplazar los productos de ejemplo por artículos reales del catálogo mediante los datos de Tiendanube, con fotografías, precios, variantes y disponibilidad.
3. Definir en productos/tags/metacampos los atributos: esponjoso, relleno, merengue, chocolate, especial; definir marca y usar esos datos para el recomendador.
4. Usar el carrito, checkout, envíos y medios de pago **nativos de Tiendanube**; no reutilizar el carrito demo de app.js.
5. Validar derechos de uso de fotografías y logotipos de las marcas.
6. Rehacer pruebas de responsive, accesibilidad, rendimiento y compra real en staging.

No hay credenciales, tokens ni integraciones de pago en este repositorio.

## Imágenes nuevas (noviembre 2026)

Las tres fotografías de marca son **imágenes de producto generadas y retocadas con IA** a partir de las referencias facilitadas por el usuario, conservando un fondo beige consistente y sin texto. Se cargan como archivos AVIF separados por marca/estilo y están optimizadas como **miniaturas de 300 × 300 px** para navegación rápida. Antes de utilizarlas para vender un producto específico, comprobar que tamaño, textura, ingredientes y presentación coincidan con el artículo real y sustituir por fotos de mayor resolución donde corresponda.
