<?php
// $name = $_GET["name"] ?? "Bárki";

// feldolgozás
$errors = [];
if (!isset($_GET["name"])) {
    // array_push($errors, "Nincs megadva adat!");
    // $errors []= "Nincs megadva adat!";
    $errors["missing"] = "Nincs megadva adat!";
} else if (strlen($_GET["name"]) < 4) {
    //$errors []= "Túl rövid név";
    $errors["length"] = "Túl rövid név";
}

// kiírás
if (count($errors) > 0) {
    foreach ($errors as $error) {
        echo $error;
    }
} else {
    echo $_GET["name"];
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text">
    <span><?= $errors["missing"] ?? "" ?></span>

    <input type="checkbox" name="" id="">
    <span><?= $errors["length"] ?? "" ?></span>
</body>
</html>