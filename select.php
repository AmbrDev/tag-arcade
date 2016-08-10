<?php
include "access_db.php";

$query="SELECT * FROM videos";
$rs$dbh->query($query);

while($row=$rs->fetch_assoc()){
  $data[]=$row;

}

print json_encode($data)
?>
