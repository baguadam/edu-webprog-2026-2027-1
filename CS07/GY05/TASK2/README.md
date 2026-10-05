## 3. feladat (Verdák):

```HTML
    <table id="table-characters" cellspacing="0" cellpadding="6">
      <thead>
        <tr>
          <th>Verdák</th>
          <th>Nem verdák</th>
          <th>Művelet</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="car">Villám McQueen</td>
          <td>Legolas</td>
          <td><button class="delete">×</button></td>
        </tr>
        <tr>
          <td class="car">Doc Hudson</td>
          <td>Optimus Prime</td>
          <td><button class="delete">×</button></td>
        </tr>
        <tr>
          <td class="car">Matuka</td>
          <td>Nyakkendős Macska</td>
          <td><button class="delete">×</button></td>
        </tr>
        <tr>
          <td class="car">Joe Komposztor</td>
          <td>Szulejman</td>
          <td><button class="delete">×</button></td>
        </tr>
        <tr>
          <td class="car">Sally</td>
          <td>Stohl András</td>
          <td><button class="delete">×</button></td>
        </tr>
      </tbody>
    </table>

<style>
  .highlight { background: #fffb91; }
  button.delete {
    background: #ef4444; color: white; border: none; border-radius: 4px;
    cursor: pointer; padding: 0.3em 0.6em;
  }
</style>
```

1. A `delete` gombra kattintva töröljük a megfelelő sort a táblázatból! HINT: ha cellára kattintok, melyik a legközelebbi elem hozzá? (`closest`)

## Önállóan:

A `car` osztályú cellára kattintva az cella kapja meg a `highlight` osztályt, értelemszerűen ha újra az adott cellára kattintok, akkor vegyik le róla ezt (`toggle`)
