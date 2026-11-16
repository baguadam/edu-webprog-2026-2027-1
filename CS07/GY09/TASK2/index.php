<?php

$bg_color = $_GET["color"] ?? "#000";

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="background-color: <?= $bg_color ?>">
    <form method="GET">
        <input type="color" name="color" id="color-input" value="<?= $bg_color ?>">
        <button type="submit">Elküld</button>
    </form> 
</body>
</html>