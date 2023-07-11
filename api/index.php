<?php
require './dataBase/DataBase.php';

$requestBody = file_get_contents('php://input');
$requestBody = json_decode($requestBody, true);
echo $requestBody['name'];
$requestMethod = $_SERVER["REQUEST_METHOD"];


if($requestBody['type'] == 'user') {

}
?>