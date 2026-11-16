<?php

$countries = [
    ["code" => "hu", "name" => "Hungary", "available" => true],
    ["code" => "de", "name" => "Germany", "available" => true],
    ["code" => "fr", "name" => "France", "available" => false],
    ["code" => "it", "name" => "Italy", "available" => true]
];

$selected_country = "de";

// echo "<select>";
//     foreach ($countries as $index => $country) {
//         if ($country["available"]) {
//             $extra = "";
//             if ($country["code"] == $selected_country) {
//                 $extra = "selected";
//             }
//             echo "<option value={$country['code']} $extra>{$country['name']}</option>";
//         }
//     }
// echo "</select>"

?>

<select name="country" id="country-select">
    <?php foreach ($countries as $country): ?>
        <?php if ($country['available']): ?>
            <option value="<?= $country["code"] ?>"><?= $country["name"] ?></option>
        <?php endif ?>
    <?php endforeach ?>
</select>
