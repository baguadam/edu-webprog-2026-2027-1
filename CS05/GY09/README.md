# 8. gyakorlat

Bemenet feldolgozása, validálás

### 0. feladat:

```php

$countries = [
    ["code" => "hu", "name" => "Hungary", "available" => true],
    ["code" => "de", "name" => "Germany", "available" => true],
    ["code" => "fr", "name" => "France", "available" => false],
    ["code" => "it", "name" => "Italy", "available" => true]
];

```

> ### GET és POST
>
> A `GET` és `POST` egyeránt HTTP kérések típusai, metódusok, aminek a segítségével a kliens (általában egy böngésző) adatokat küld a szervernek. A `GET` metódus az adatokat az URL-ben továbbítja, míg a `POST` metódus az adatokat a kérés törzsében (body) küldi el. A kettő közötti fő különbség az, hogy a `GET` kérések általában kisebb mennyiségű adat továbbítására alkalmasak, és az adatok láthatóak az URL-ben, míg a `POST` kérések nagyobb mennyiségű adat továbbítására is alkalmasak, és az adatok nem láthatóak az URL-ben. A `GET` kéréseket általában akkor használjuk, amikor adatokat szeretnénk lekérdezni a szervertől, míg a `POST` kéréseket akkor, amikor adatokat szeretnénk küldeni a szervernek, például egy űrlap beküldésekor.
>
> A PHP-ban a `$_GET` és `$_POST` szuperglobális tömbök segítségével érhetjük el a `GET` és `POST` kérésekben küldött adatokat. Például, ha egy űrlapot `POST` metódussal küldünk el, akkor az űrlap mezőinek értékei a `$_POST` tömbben lesznek elérhetőek. (Szuperglobálisok: speciális változók, amelyek minden helyről elérhetőek a kódban, például függvényekből is.)

## Bemenet feldolgozása

### 1. Üdvözlés oldal

Készítsünk egy oldalt, amelynek paraméterül adva egy nevet, az üdvözli a felhasználót. Például: `welcome.php?name=John` esetén az oldal tartalma legyen "Hello, John!". Bővítsük az oldalt úgy, hogy a nevet egy űrlapon keresztül is be lehessen küldeni!

- Okosítsuk tovább az oldalt, írjunk egy `validate` függvényt, aminek a segítségével eééenőrízzük ki, hogy kaptunk-e nevet, ha igen, az legalább 3 karakter hosszú-e.
- Tároljunk hibaüzeneteket egy tömbben, jelenenítsük meg, ha vannak hibák. Egyébként üdvözöljük a felhasználót!

### 2. Háttérszín beállítása

Készíts egy oldalt, ahol a háttérszínt egy űrlapon keresztül lehet beállítani. Az űrlap tartalmazza az alábbiakat:

- egy `type=color` mezőt, amivel a felhasználó kiválaszthat egy színt
- egy `type=submit` gombot a beküldéshez

PHP segítségével oldd meg az alábbiakat:

- hozz létre egy `default_color` változót, ami tartalmaz egy alapértelmezett színt (pl. `#ffffff`)
- ellenőrizd, hogy érkezett-e `GET` kérésen belül `color`, ha nem, használd a `default_color` változót, ha igen, használd az `urldecode` függvényt, hogy a `%23` karakter megfelelően legyen kódolva az URL-ben
- ha érkezett, `regex` segítségével ellenőrizd, hogy megfelelő formátumú-e, ehhez használd a következő reguláris kifejezést: `'/^#[0-9a-f]{6}$/i'` és a [`preg_match`](https://www.php.net/manual/en/function.preg-match.php) függvényt
- állítsuk be a `body` inline `style` attribútumát a kiválasztott színre (vagy a default vagy a beküldött)

### 3. Ibizai utazás

Készítsünk egy oldalt, amire megérkezve a felhasználót értesítjük, hogy nyert egy ibizai utazást, ehhez viszont előbb meg kell adnia néhány személyes adatát. Kérjük be tőle az alábbiakat:

- név
- email
- bankkártya szám
- legördülő menüből válaszható időpont (3 választható dátum legyen)
- checkbox-szal jelölhető, hogy elfogadja a részvételi feltételeket
- egy `type=submit` gombot a beküldéshez

1. Tároljuk a hibákat, illetve a megadott adatatokat is, hogy állapottartó legyen az űrlap!
2. Írjunk egy `validate` függvényt, ami ellenőrzi az alábbiakat:
   - van név és az legalább 3 karakter hosszú
   - van email és az megfelelő formátumú (használjuk a `filter_var` függvényt `FILTER_VALIDATE_EMAIL` szűrővel)
   - a bankkártya szám pontosan 16 számjegyből áll
   - van kiválasztott időpont
   - a részvételi feltételeket elfogadták
3. Ha vannak hibák, azokat jelenítsük meg az űrlapon, egyébként, ha minden valid, jelenítsünk meg egy köszönő üzenetet.
