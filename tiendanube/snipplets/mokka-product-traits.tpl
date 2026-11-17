{# MOKKA: product traits must be assigned explicitly in Tiendanube Tags, e.g.
  textura:suave, relleno:ddl, cobertura:chocolate.
  Exact, lowercase tags; no invented attributes and no cart or variant hooks.
  Classic/Twig product.tags is an array. See tiendanube/README.md.
#}
{% set mokka_tags = product.tags | default([]) %}
<section class="mokka-native-traits" aria-label="Características del alfajor">
  <h2>¿Cómo es este alfajor?</h2>
  <p class="mokka-native-traits__intro">Textura, relleno y cobertura: los mismos atributos de nuestro buscador.</p>
  <div class="mokka-native-traits__grid">
    {% set mokka_has_textura = 'textura:suave' in mokka_tags or 'textura:capas' in mokka_tags or 'textura:maicena' in mokka_tags %}
    <section class="mokka-native-traits__group">
      <h3>1. La textura</h3>
      <div class="mokka-native-traits__values">
        {% if 'textura:suave' in mokka_tags %}<span class="mokka-native-traits__tag"><span aria-hidden="true">☁️</span> Suave</span>{% endif %}
        {% if 'textura:capas' in mokka_tags %}<span class="mokka-native-traits__tag"><span aria-hidden="true">🥮</span> Capas finas</span>{% endif %}
        {% if 'textura:maicena' in mokka_tags %}<span class="mokka-native-traits__tag"><span aria-hidden="true">🍪</span> Maicena</span>{% endif %}
        {% if not mokka_has_textura %}<span class="mokka-native-traits__missing">Por confirmar</span>{% endif %}
      </div>
    </section>
    {% set mokka_has_relleno = 'relleno:ddl' in mokka_tags or 'relleno:membrillo' in mokka_tags or 'relleno:cayote' in mokka_tags or 'relleno:pistacho' in mokka_tags %}
    <section class="mokka-native-traits__group">
      <h3>2. El relleno</h3>
      <div class="mokka-native-traits__values">
        {% if 'relleno:ddl' in mokka_tags %}<span class="mokka-native-traits__tag"><span aria-hidden="true">🍯</span> Dulce de leche</span>{% endif %}
        {% if 'relleno:membrillo' in mokka_tags %}<span class="mokka-native-traits__tag"><span aria-hidden="true">🍐</span> Membrillo o fruta</span>{% endif %}
        {% if 'relleno:cayote' in mokka_tags %}<span class="mokka-native-traits__tag"><span aria-hidden="true">🌿</span> Cayote</span>{% endif %}
        {% if 'relleno:pistacho' in mokka_tags %}<span class="mokka-native-traits__tag"><span aria-hidden="true">🌰</span> Pistacho</span>{% endif %}
        {% if not mokka_has_relleno %}<span class="mokka-native-traits__missing">Por confirmar</span>{% endif %}
      </div>
    </section>
    {% set mokka_has_cobertura = 'cobertura:chocolate' in mokka_tags or 'cobertura:blanco' in mokka_tags or 'cobertura:merengue' in mokka_tags or 'cobertura:glaseado' in mokka_tags %}
    <section class="mokka-native-traits__group">
      <h3>3. La cobertura</h3>
      <div class="mokka-native-traits__values">
        {% if 'cobertura:chocolate' in mokka_tags %}<span class="mokka-native-traits__tag"><span aria-hidden="true">🍫</span> Chocolate</span>{% endif %}
        {% if 'cobertura:blanco' in mokka_tags %}<span class="mokka-native-traits__tag"><span aria-hidden="true">🤍</span> Chocolate blanco</span>{% endif %}
        {% if 'cobertura:merengue' in mokka_tags %}<span class="mokka-native-traits__tag"><span aria-hidden="true">🥚</span> Merengue</span>{% endif %}
        {% if 'cobertura:glaseado' in mokka_tags %}<span class="mokka-native-traits__tag"><span aria-hidden="true">✨</span> Glaseado / almíbar</span>{% endif %}
        {% if not mokka_has_cobertura %}<span class="mokka-native-traits__missing">Por confirmar</span>{% endif %}
      </div>
    </section>
  </div>
</section>
