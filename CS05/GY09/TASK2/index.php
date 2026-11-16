<?php

var_dump($_POST);

$name = $_GET["name"] ?? "Bárki";

$errors = [];
if (!isset($_GET["name"])) {
    // array_push($errors, "Nincs megadva név!");
    // $errors []= "Nincs megadva név!";
    $errors["name"] = "Nincs megadva név!";
} else if (strlen($_GET["name"]) < 3) {
    // $errors []= "Túl rövid a neved!";
    $errors["length"] = "Túl rövid a neved!";
}

$is_valid = count($errors) == 0;
?>

<a href="http://localhost:3000?name=John">John</a>

<form method="POST">
    <input type="text" name="person">
    <input type="number" name="age">
    <button type="submit">Elküld</button>
</form>

<h1>
    <?php if ($is_valid): ?>
        Üdv, <?= $_GET["name"] ?>
    <?php else: ?>
        Nincs kit üdvözölni!
    <?php endif ?>
</h1>

<span style="color: red;"><?= $errors["length"] ?? "" ?></span>
