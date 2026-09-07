# 1. gyakorlat

1. Követelmények átbeszélése.
2. Fejlesztőkörnyezet + néhány érdekesség az előadás diáiról.
3. Néhány érdekesség a böngészőben + VS Code-ban.

## Feladatok

1. Definiáljunk változókat! Nézzük meg, hogyan tudunk létrehozni különböző változókat, milyen műveleteket tudunk velük végezni. Irassunk ki a console-ra értékeket!
   - `let` vs `const` vs `var`
2. Vezérlési szerkezeteket: írjunk elágazást, ciklusokat
3. Összetettebb adattípusok és azok alkalmazása: tömb, set, stb
   - Hozzunk létre egy tömböt, ami csak számokat tartalmaz
   - Hozzunk létre egy tömböt, ami vegyes típusokat tartalmaz
   - Hozzunk létre egy tömböt, ami tömböket is tartalmaz
   - Iteráljunk végig a tömbökön: `for in`, `for of`
4. Hozzunk létre egy függvényt, ami paraméterül egy színeket tartalmazó tömböt kap, majd random kiválaszt egy elemet a tömbből, és visszadja ezt. Nézzük meg, miben különbözzik a függvény használata `arraw function`ként és tradicionalis `function`ként!
   - `érték` vs `referencia`
   - `pure` vs `impure`
5. Hozzunk létre egy bjektumot, aminek van `greet` metódusa!
   - dereferálás
   - `Object.keys`, `Object.values`, `Object.entries`.
6. Készítsünk egy függvényt, ami paraméterül egy másik függvényt és egy számot kap, majd alkalmazza a kapott függvényt a számra.
7. Készítsünk egy tömböt, ami számokat tartalmaz, nézzük meg, hogyan tudunk hozzáadni új elemeket.
   - `Math.max`.
8. Az alábbi tömb hőmérsékleti méréseket tartalmaz.

```js
const temperatures = [0, -1.5, 20, 30, -12.5, 1];
```

- Tömbfüggvények segítségével oldjuk meg az alábbi feladatokat:
  - Írjuk ki a tömb összes elemét egymás alá!
  - Nézzük meg, hány napról van adatunk!
  - Szűrjük ki azokat a napokat, amikor nem fagyott. Hány ilyen nap volt?
  - Hozzunk létre egy új tömböt, amiben minden elem után hozzárendeljük a "C" betűt!
  - Döntsük el, hogy volt-e olyan nap, amikor 40 foknál melegebb volt!
  - Döntsük el, hogy igaz-e, hogy egyik nap sem fagyott!
  - Keressük meg az első olyan napot, amikor 10 foknál melegebb volt!
  - Mennyi volt a hőmérsékletek összege?
  - Rendezzük a tömböt!

8. Induljunk ki az alábbi, objektumokat tartalmazó tömbből:

```js
const friendDetails = [
  { name: "Barna", age: 23, favSport: "football", hasStrava: true },
  {
    name: "Matyi",
    age: 24,
    favSport: null,
    hasStrava: false,
  },
  {
    name: "Eszter",
    age: 20,
    favSport: "running",
    hasStrava: true,
  },
  { name: "Ádám", age: 23, favSport: "football", hasStrava: true },
];
```

- Tömbfüggvények segítségével oldjuk meg az alábbi feladatokat:
  - Írjuk ki mindenki nevét és életkorát!
  - Gyűjtsük ki egy tömbbe az összes kedvenc sportot!
  - Gyűjtsük ki a Stravat használókat!
  - Döntsük el, hogy van-e bárki, akinek nincs kedvenc sportja!
  - Igaz, hogy mindenkinek van Stravaja?
  - Keressük meg az első személyt, akinek a kedvenc sportja a "handball", jelezzük, ha nincs ilyen!
  - Bővítsétek ki a tömböt néhány új, hasonló struktúrával rendelkező objecttel. Tegyétek ezt meg a `push` és a `spread operator` használatával is!

9. Készítsünk egy `makeAdder` generátorfüggvényt, ami egy függvenyt ad vissza, ami megnöveli a kapott számot a generátornak megadott számmal!

10. Készítsünk egy `sumArrow` függvényt, ami tetszőleges számú paramétert kaphat (számok), majd ezeket összegzi, visszatér a számok összegével!