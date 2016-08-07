<?php
   class MyDB extends SQLite3
   {
      function __construct()
      {
         $this->open('tagarcadevids.db');
      }
   }
   $db = new MyDB();
   if(!$db){
      echo $db->lastErrorMsg();
   } else {
      echo "Opened database successfully\n";
   }

   $sql =<<<EOF
      SELECT * from videos;
EOF;

   $ret = $db->query($sql);
   while($row = $ret->fetchArray(SQLITE3_ASSOC) ){
      echo "title = ". $row['title'] . "\n";
      echo "header = ". $row['header'] ."\n";
      echo "url = ". $row['url'] ."\n";
      echo "img =  ".$row['img'] ."\n\n";
      echo "category =  ".$row['category'] ."\n\n";
      echo "description =  ".$row['description'] ."\n\n";
      echo "code =  ".$row['code'] ."\n\n";

   }
   echo "Operation done successfully\n";
   $db->close();





?>
