{#
 MOKKA — Tiendanube Classic theme product detail adapter.
 Based on Tiendanube's documented product.tpl structure.
 IMPORTANT: the host theme MUST provide both native product snipplets.
 Keep its original product.tpl as a backup and merge theme-specific code.
 No custom cart JavaScript, prices or stock: all handled by Tiendanube.
#}
<div id="single-product"
     class="js-has-new-shipping js-product-detail js-product-container js-shipping-calculator-container mokka-native-product"
     data-variants="{{ product.variants_object | json_encode }}"
     itemscope itemtype="https://schema.org/Product">
  <div class="container">
    <div class="row section-single-product mokka-native-product__layout">
      <div class="col-12 col-md-7 px-0 px-sm-3 mokka-native-product__images">
        {# Native carousel/zoom, labels, variant images, responsive images #}
        {% include 'snipplets/product/product-image.tpl' %}
      </div>
      <div class="col-12 col-md-5 mokka-native-product__purchase">
        {# Native title, price, promos, variations, stock, quantity, shipping, payment and add-to-cart #}
        {% include 'snipplets/product/product-form.tpl' %}
        {# Show the same texture, filling and coating taxonomy used in the Mokka product finder. #}
        {% include 'snipplets/mokka-product-traits.tpl' %}
        {% include 'snipplets/mokka-product-benefits.tpl' %}
      </div>
    </div>
    {% if settings.show_product_fb_comment_box %}
      <div class="fb-comments section-fb-comments"
           data-href="{{ product.social_url }}"
           data-num-posts="5" data-width="100%"></div>
    {% endif %}
    <div id="reviewsapp"></div>
  </div>
</div>
{# Native related product listings, includes product inventory and URLs #}
{% include 'snipplets/product/product-related.tpl' %}
