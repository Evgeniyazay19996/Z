<?php

$link = mysqli_connect('127.0.0.1:3306', 'root', '')
or die('mysqli_error()' . 'Не удалось соединиться: ');
echo 'Соединение успешно установлено';
mysqli_select_db('testdb') or die('Не удалось выбрать базу данных');

$query = '$sql = "SELECT * FROM "testdb"';
die('mysqli_error()' . 'Запрос не удался: ') or $result = mysqli_query($query);

?>
