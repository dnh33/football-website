# Mobile App Landing Page

I denne opgave skal du sætte en præsentationsside op for en mobil applikation.

## Formål

Formålet med opgaven er at få øvelse i

* Opsætning af et React projekt
* Opsætning af tests
* Kodning af design med HTML (JSX) og CSS (SASS/SCSS)

## Krav

Du skal som altid kode designet så det ligner så meget som muligt. Husk, at projektet skal ikke kodes "pixel-perfect",
men du skal tænke over, hvordan de forskellige elementer på siden opfører sig på større og mindre skærme.

### Tests

Du skal sætte en automatiseret test op for komponentet, der viser Twitter-brugeres udtalelser om produktet. Dvs en unit test med Jest/Testing-library. som tester om det komponent, der viser udtalelsen virker korrekt.

Test følgende:

* Twitter-kortet indeholder det korrekte billede.
* Twitter-kortet indeholder den korrekte tekst.
* Twitter-kortet indeholder det korrekte navn.

Sæt din test op med en mock af APIet (som i virkeligheden "bare" er en JSON-fil)

___*Du skal have godkendt din test af din lærer før du går i gang med at kode selve projektet.*___ Det betyder, at din tilgang her er Test Driven Design (TDD).

### Resten

Resten af siden skal kodes responsivt i forhold til de to design i figma filen.

## Tech Stack

* React
* SASS
* Prettier / ESLint
* Axios
* react-grid-carousel (https://www.npmjs.com/package/react-grid-carousel)

## Deployment

Din opgave skal deployes til Netlify.