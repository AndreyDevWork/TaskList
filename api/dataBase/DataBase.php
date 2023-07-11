<?php
  class DataBase {
    public static function connectDB() {
      $mysqli = new mysqli
      (
        'localhost',
        'root',
        '', 
        'task_list' 
      );
      if($mysqli->connect_errno) {
        die('Ошибка соединения' . $mysqli->connect_errno);
      }
      return $mysqli;
    }
  }
?>