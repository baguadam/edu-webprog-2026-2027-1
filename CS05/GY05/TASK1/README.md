# Lottószelvény

1. Az `Új szelvény` feliratú gombra kattintva ez a gomb és a legördülő lista kerüljenek letiltásra! (Segítség: disabled HTML attribútumot kell beállítani.)

2. Az előzővel egyidejűleg jelenjen meg az oldalon egy táblázat, amely az egész számokat tartalmazza 1-től kezdve, és mérete a választott játéktípustól függően:

- ötös lottó esetén: 10 sor × 9 oszlop
- hatos lottó esetén: 5 sor × 9 oszlop
- skandináv lottó esetén: 5 sor × 7 oszlop

3. Az egyes cellákra kattintva az adott cella kapja meg a `played` stílusosztályt! (A későbbi feladatok miatt célszerű lehet a kijelölt számot ezen a ponton egy tömbbe elmenteni.)

4. Ha a kattintáskor a cella már `played` osztályú, akkor távolítsd el róla a stílust! (Ha elmentetted a számot, akkor távolítsd el a tömbből is!)

5. Ha pontosan annyi cella van kijelölve, amennyi a szelvény feladásához szükséges (ötös lottó esetén 5, hatos esetén 6, skandináv esetén 7 szám), jelenjen meg az oldalon a `tasks` azonosítójú div! Ha időközben másra változik a kijelölt cellák száma, akkor a divet rejtsd el!

6. A `Sorsolás` feliratú gombra kattintáskor hívd meg a kiinduló csomagban kapott `drawLottery(n)` függvényt, és a visszakapott tömböt írd ki a `task6` azonosítójú elembe vesszővel-szóközzel tagolva, ahogyan a mintán látható! (A függvény paramétereként 5-ös, 6-os vagy 7-es értéket kell megadni; visszatérési értéke az adott típusú sorsolás nyerőszámait emelkedő sorrendben tartalmazó tömb.)

7. Az előzővel egyidejűleg a `task7` azonosítójú elembe írd ki, hogy hány találata van a játékosnak! (Hány közös eleme van a kisorsolt tömbnek és a kijelölt számok listájának? Ha nem sikerült az 1-5. feladatot megoldanod, égess be egy tetszőleges számtömböt az összehasonlításhoz.) Érdemes lehet algoritmikus megoldás helyett tömbfüggvényekben gondolkodni. (`filter` + `includes`)

8. Sorsoláskor a `task8` azonosítójú elembe írd ki a kisorsolt nyerőszámok összes számjegyének összegét! (Ebben segíthet, ha a listát összefüggő stringgé alakítod, amit karakterenként dolgozol fel.)

Példa: [5, 10, 11, 16, 26, 28, 32] ⟶ 5 + 1 + 0 + 1 + 1 + 1 + 6 + 2 + 6 + 2 + 8 + 3 + 2 = 38

(`join` + `split`)

9. A `task9` azonosítójú elembe írd ki, hogy van-e a nyerőszámok között olyan szám, amelynek a négyzete is kisorsolásra került! (Például: 4 és 16 egy sorsoláson belül.) Mivel az 1 önmaga négyzete, ezért önmagában is teljesíti a feltételt. NE égess be konkrét értékeket a megoldásodba!

10. Oldd meg, hogy ne lehessen a szükségesnél (játéktól függően 5, 6 vagy 7) több számot kijelölni a táblázatban!
