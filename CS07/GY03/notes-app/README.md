# Jegyzetkészítő alkalmazás

Induljunk ki az alábbi HTML-ből:

```HTML
<h2 id="title">Jegyzeteim</h2>
<input type="text" id="titleInput" placeholder="Type a new title..." />
<label> <input type="checkbox" id="highlight" /> Cím kiemelése </label>
<button id="lockBtn">Cím lezárása</button>

<style>
    .highlight {
     background-color: yellow;
    }
</style>
```

1. Minden egyes alkalommal, amikor a felhasználó a szövegmezőbe gépel, a `h2` elem szövege változzon meg a beírt értékre (ha üres az szövegmező, adjunk egy `default` értéket a `h2`-nek)!
2. A checkbox bejelölésekor a `h2` elem kapja meg a `highlight` osztályt, a jelölés megszüntetésekor pedig tűnjön el az osztály!
3. A gombra kattintáskor a szövegmező legyen letiltva, a gomb felirata pedig változzon `Cím feloldása`-ra. Ekkor a szövegmező ismét legyen használható, a gomb felirata pedig vissza `Cím lezárása`-ra változzon! (`readonly` attribútum használata)
