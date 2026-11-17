# Mokka — etiquetas de producto para Tiendanube

El buscador **“Tu alfajor ideal”** y las fichas de producto deben compartir **exactamente** estos tres grupos. En el panel de cada producto de Tiendanube, asigná las tags indicadas (minúsculas, sin espacios; cada etiqueta independiente). El componente `snipplets/mokka-product-traits.tpl` las lee a través de `product.tags`.

## Diccionario de etiquetas

| Grupo | Tag exacta | Etiqueta visible |
| --- | --- | --- |
| Textura | `textura:suave` | ☁️ Suave |
| Textura | `textura:capas` | 🥮 Capas finas |
| Textura | `textura:maicena` | 🍪 Maicena |
| Relleno | `relleno:ddl` | 🍯 Dulce de leche |
| Relleno | `relleno:membrillo` | 🍐 Membrillo o fruta |
| Relleno | `relleno:cayote` | 🌿 Cayote |
| Relleno | `relleno:pistacho` | 🌰 Pistacho |
| Cobertura | `cobertura:chocolate` | 🍫 Chocolate |
| Cobertura | `cobertura:blanco` | 🤍 Chocolate blanco |
| Cobertura | `cobertura:merengue` | 🥚 Merengue |
| Cobertura | `cobertura:glaseado` | ✨ Glaseado / almíbar |

> **Importante:** la etiqueta `relleno:membrillo` cubre el criterio del buscador “Membrillo o fruta”, por lo que también se usa en productos de pera. Antes de producción, podemos separar “pera” y “membrillo” si queremos filtros más específicos. **Merengue** y **glaseado** son etiquetas diferentes.

## Mapeo del catálogo Mokka (prototipo)

Esta tabla deriva de las características recopiladas para la demo. Confirmar cada SKU de la lista real con etiquetas o ficha técnica **antes de importarlo a Tiendanube**. No inferir atributos desconocidos a partir de la marca.

| Marca | Variedad de prueba | Tags actuales (copiar por separado en Tiendanube) |
| --- | --- | --- |
| Merengo | Caja de 12 alfajores Merengo | *Por confirmar* |
| Merengo | Santafesino tradicional | `textura:capas`, `relleno:ddl`, `cobertura:merengue` |
| Merengo | Alfajor de chocolate | `relleno:ddl`, `cobertura:chocolate` |
| Arocense | Especial nuez y ron | `cobertura:glaseado` |
| Las Dos Rosas | Santafesino de tres tapas | `textura:capas`, `relleno:ddl`, `cobertura:glaseado` |
| Isla del Sabor | Santafesino tradicional | `textura:capas`, `relleno:ddl`, `cobertura:glaseado` |
| Saboreé | Alfajor de maicena | `textura:maicena`, `textura:suave`, `relleno:ddl` |
| Saboreé | Membrillo con merengue | `relleno:membrillo`, `cobertura:merengue` |
| Saboreé | Chocolate negro | `cobertura:chocolate` |
| La Quinta | Regional de dulce de leche | `textura:suave`, `relleno:ddl`, `cobertura:glaseado` |
| La Quinta | Regional de pera o membrillo | `textura:suave`, `relleno:membrillo`, `cobertura:glaseado` |
| La Quinta | Selección de autor · Pistacho | `relleno:pistacho`, `cobertura:chocolate` |
| El Cordobés | Alfajor de pera | `relleno:membrillo`, `cobertura:glaseado` |
| El Cordobés | Alfajor de membrillo | `relleno:membrillo`, `cobertura:glaseado` |
| El Cordobés | Alfajor de dulce de leche | `relleno:ddl`, `cobertura:glaseado` |
| Zafarrancho | Chocolate con dulce de leche | `relleno:ddl`, `cobertura:chocolate` |
| Zafarrancho | Chocolate blanco con dulce de leche | `relleno:ddl`, `cobertura:blanco` |
| Catamarqueños | Ejemplo regional: cayote · El Rodeo | `relleno:cayote` |
| Tucumanos | Ejemplo regional: chocolate · Del Tucumán | `relleno:ddl`, `cobertura:chocolate` |
| Tucumanos | Ejemplo regional: merengue · Del Tucumán | `relleno:ddl`, `cobertura:merengue` |
| Tucumanos | Ejemplo regional: membrillo · Del Tucumán | `relleno:membrillo`, `cobertura:merengue` |

## Comportamiento

- Si una variedad tiene varias tags de un mismo grupo, se muestran varias píldoras.
- Si un grupo no tiene tags compatibles, aparece **Por confirmar**.
- Si hay tags ajenas al sistema Mokka (por ejemplo `oferta` o `navidad`), se ignoran para estos grupos y se conservan para el uso habitual del tema.
- Las tags **no son variantes comprables**. La presentación, precio, stock y selector de variante dependen de los campos y snipplets nativos de Tiendanube.
- Los tags deben verificarse con los productores. No copiar automáticamente las clasificaciones de un proveedor regional no identificado.
- El producto `mer-box12` de la demo no tiene textura/relleno/cobertura atribuidos porque es una caja genérica sin contenido confirmado. Cuando se defina una caja mixta, las tags deben reflejar solo atributos verdaderos de los alfajores que contiene, o dejarse sin asignar.

En los temas Classic la información de atributos del producto está disponible como `product.tags` (arreglo); Tiendanube la documenta en https://docs.tiendanube.com/help/product y https://tiendanube.dev/themes/twig-reference/objects.
