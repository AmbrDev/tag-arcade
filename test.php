
<?php
/*
* Code to query an SQLite database and return
* results as JSON.
*/
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Specify your sqlite database name and path //
$dir = 'sqlite:tagarcadevids.db';

// Instantiate PDO connection object and failure msg //
$dbh = new PDO($dir) or die("cannot open database");

// Define your SQL statement //
$query = "SELECT * FROM videos";

// Iterate through the results and pass into JSON encoder //

// header('Content-Type: application/json');

foreach ($dbh->query($query) as $row) {
echo json_encode($row);
}
?>
