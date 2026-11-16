<?php

$countries = [
    ["code" => "hu", "name" => "Hungary", "available" => true],
    ["code" => "de", "name" => "Germany", "available" => true],
    ["code" => "fr", "name" => "France", "available" => false],
    ["code" => "it", "name" => "Italy", "available" => true]
];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <?php
        echo "<select>";
            foreach ($countries as $index => $country) {
                if ($country["available"]) {
                    $country_name = $country["name"];
                    $country_code = $country["code"];
                    echo "<option value=$country_code>$country_name</option>";
                }
            }
        echo "</select>";
    ?>

    <select name="countries" id="country-select">
        <?php foreach ($countries as $country): ?>
            <?php if ($country["available"]): ?>
                <option value="<?= $country["code"] ?>"><?= $country["name"] ?></option>
            <?php endif ?>
        <?php endforeach ?>    
    </select>
    
</body>
</html>
