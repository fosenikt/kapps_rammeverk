---
sidebar_position: 5
id: contribute_category
title: Kategori
---

Trenger du en ny kategori for dokumentasjon eller en ny mappe for å laste opp bilder i?

En mappe opprettes på samme måte som en [ny side](/contribute/contribute_new), bare at du måte skrive mappenavn / filnavn.

![Docusaurus](/img/contribute/contribute05.jpg)


Mapper for dokumentasjon opprettes her [https://github.com/fosenikt/kapps_rammeverk/tree/main/docs](https://github.com/fosenikt/kapps_rammeverk/tree/main/docs).
Mapper under /docs vil automatisk bli en ny kategori.

Inne i denne mappen, må du også ha en .json fil med navn **_category_.json**, som inneholder navn og plassering i sidemenyen.
```
{
  "label": "Deling av tjenester",
  "position": 2
}
```

## Bilder, filer og annet statisk innhold

Mappe for andre statiske filer, som f.eks. bilder, kan legges her: [https://github.com/fosenikt/kapps_rammeverk/tree/main/static](https://github.com/fosenikt/kapps_rammeverk/tree/main/static).

Bilder legges til i undermappen /static/**img**

