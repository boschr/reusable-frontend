# Typography

## Getting started

## Waarom

- Minder CSS output, door `%placeholders` icm recursive extends
- Minder lijnen code per component. Je component blijft overzichtelijker
- Typography voor je hele applicatie op één plek georganiseerd
- Consistentere output: je denk applicatie breed na over de stylen ipv voor de specifieke implemenatie
- Snel overzicht van de alle gebruikte (en te gebruiken) stylen

## Voorbeeld:

```scss
body {
  @include typography();
}

h1 {
  @include typography(h1);
}

.card {
  &__title {
    @include typography(h1);
  }
}

h2 {
  @include typography(h2);
}

.label {
  @include typography(label);
}

.test {
  @include typography(test);
}
```

```html
<html>
  <body>
    <h1>Heading</h1>
    <p>Paragraph</p>
    <h2>Heading</h2>
    <p class="label">Paragraph</p>
    <span class="test">Testje</span>
  </body>
</html>
```
