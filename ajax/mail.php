<?php
$surname = $_POST['surname'];
$name = $_POST['name'];
$patronimyc = $_POST['patronimyc'];
$email = $_POST['email'];
$message = $_POST['message'];

$subject = "=?utf-8?B?".base64_encode("Соббщение")."?=";
$headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n ";

$success = mail("zhenya_hear100@mail.ru", $subject, $message, $headers);
echo $success;
 ?>
