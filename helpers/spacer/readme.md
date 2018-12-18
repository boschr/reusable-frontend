# Spacer

Mixin om makkelijk, snel en contistent ruimtes (padding / margin) te kunnen creeren.

Als het ontwerp het toelaat probeer ik zoveel mogelijk om vanuit een basis afmeting te werken. Vaak is dit één of een halve kolom breedte bij een 12 koloms grid (meestal: 95 of 100px).

Er worden ook direct mediaqueries toegevoegd obv een te configureren factor. Mixin kent ook de properties `XX-vertical` en `XX-horizontal` waar XX vervangen kan worden voor `margin` en `padding` om top/bottom of left/right properties in één keer aan te maken.

Deze mixin heeft een aantal afhankelijkheden, waarvan de code ook in deze repo te vinden is:
- mediaqueries (bs?)
- utils comp maken?
  - functie: str-replace
  - functie: ends-with
-

## Voorbeeld

### Configuratie

```scss
$_spacing-base: 50px;

$map-spacing: (
  small:    $spacing-base / 2,
  base:     $spacing-base,
  large:    $spacing-base * 2,
);

$map-media-spacing-factor: (
  xs: .4,
  sm: .6,
  md: .8,
  lg: 1,
  xl: 1,
);
```

### Implementatie

```scss
.card {
  @include spacing(padding-vertical);
}
```
