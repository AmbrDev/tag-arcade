<?php
$dbhandle = sqlite3::open('tagarcadevids.db');
$query = sqlite_query($dbhandle, 'SELECT title, header FROM videos LIMIT 5');
while ($entry = sqlite_fetch_array($query, SQLITE_ASSOC)) {
    echo 'title: ' . $entry['title'] . '  header: ' . $entry['header'];
}
?>
