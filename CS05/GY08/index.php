<?php 
$last_name = "Bagu";    // string
$first_name = "Ádám";
$age = 17;              // int
$alive = true;          // bool
$height = 175.3;        // float

// console.log();
var_dump($last_name, $first_name, $age, $alive, $height);

echo "<h1 style='color: red'>Főoldal</h1>";
echo $age + $height;
echo $last_name . " " . $first_name;
echo "$last_name $first_name";

if ($age > 18) {
    echo "<h2>Beléphetsz</h2>";
} else {
    echo "<h2>Életkorok: $age</h2>";
}

$count = 0;
while ($count < 3) {
    echo "<p>$count</p>";
    $count++;
}

$username = "adam" ?? "default";

// arrays
$fruits = ["banana", "apple", "orange", 42];
var_dump($fruits);

array_push($fruits, "lemon");
echo is_array($fruits);
echo in_array("körte", $fruits);

echo "<ul>";
foreach ($fruits as $index => $fruit) {
    echo "<li>$index: $fruit</li>";
}
echo "</ul>";

$person = [
    "name"        => "Béla",
    "age"         => 50,
    "hasStrava"   => false,
    "favSubjects" => [
        "best"  => "maths",
        "least" => "art"
    ] 
];

var_dump($person);

echo "<ul>";
foreach ($person as $key => $value) {
    if (!is_array($value)) {
        $to_log = $value;
        if (gettype($value) == "boolean") {
            $to_log = $value ? "VAN" : "NINCS";
        }
        echo "<li>$key: $to_log</li>";
    } else {
        echo "<ul>";
        foreach ($value as $k => $v) {
            echo "<li>$k: $v</li>";
        }
        echo "</ul>";
    }
}
echo "</ul>";

// functions
function sumNums($numbers) {
    $sum = 0;
    foreach ($numbers as $num) {
        $sum += $num;
    }
    return $sum;
}

echo sumNums([1, 2, 3]);

// ....
$nums = [4, 5, 6, 7];
var_dump($nums);
function addToArray(&$my_nums, $value) {
    array_push($my_nums, $value);
}
addToArray($nums, 10);
var_dump($nums);

$size = count($nums);
$l = strlen($first_name);
echo "<b>$l</b>"

?>
