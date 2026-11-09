<?php
$last_name = "Kovács";
$first_name = "Ági";
$age = 17;
$is_alive = true;
$height = 175.3;

$name_length = strlen($first_name);
echo($name_length);

var_dump($last_name, $first_name, $age, $is_alive, $height);

$full_name = $last_name . " " . $first_name;
$full_name_intrp = "{$last_name} {$first_name}";

echo($full_name_intrp);
echo("<h1>HELLO!</h1>");

if ($age > 18) {
    echo "<h2>Beléphetsz!</h2>";
} else {
    echo "<h2>Életkorod: {$age}</h2>";
}

$counter = 0;
while ($counter < 3) {
    echo "<p style='color: red'>{$counter}</p>";
    $counter++;
}

$fruit_array = ["banana", "orange", "apple"];
var_dump($fruit_array);
array_push($fruit_array, "lemon");
$array_size = count($fruit_array);
echo(array_pop($fruit_array));
echo($fruit_array[1]);


echo("<ul>");
foreach($fruit_array as $index => $fruit) {
    echo("<li>{$index}: {$fruit}</li>");
}
echo("</ul>");

function calculateSum($num_array) {
    $sum = 0;
    foreach ($num_array as $num) {
        $sum += $num;
    }

    return $sum;
}

function addTwoNums(int $num1, int $num2) {
    return $num1 + $num2;
}

$nums = array(1, 2, 3, 4);
$result = calculateSum($nums);
echo("<h2>{$result}</h2>");

$add_result = addTwoNums(10, 9);

$person = [
    "name"      => "Ádám",
    "age"       => 24,
    "counter"   => "Hungary"
];
var_dump($person);

echo "<ul>";
foreach($person as $key => $value) {
    echo "<li>{$key}: {$value}</li>";
}
echo "</ul>";

$values = array_values($person);
$keys = array_keys($person);
$is_array = is_array($person);

var_dump($values, $keys, $is_array);

?>

