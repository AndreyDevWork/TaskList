<?php
  require '../database/DataBase.php';
  require '../utils/Validate.php';

  class User {
    public function signup() {
      $requestBody = file_get_contents('php://input');
      $requestBody = json_decode($requestBody, true);

      $resName = Validate::validateName($requestBody['name']);
      $resEmail = Validate::validateEmail($requestBody['email']);
      $resPassword = Validate::validatePassword($requestBody['password']);

      if(!$resName || !$resEmail || !$resPassword) {
        die('Ошибка валидации');
      }

      $mysql = DataBase::connectDB();

      $name = $requestBody['name'];
      $email = $requestBody['email'];
      $password = $requestBody['password'];
      $authKey = bin2hex(random_bytes(16));


      $prepare = $mysql->prepare("INSERT INTO `users` (name, email, password, auth_key) VALUES (?, ?, ?, ?)");
      $prepare->bind_param('ssss', $name, $email, $password, $authKey);

      $prepare->execute();
      $prepare->close();
      $mysql->close();
      echo 'Ok';
    }

    public function login() {
      $requestBody = file_get_contents('php://input');
      $requestBody = json_decode($requestBody, true);


      $mysql = DataBase::connectDB();
      $prepare = $mysql->prepare("SELECT * FROM `users` WHERE `email` = ? AND `password` = ?");
      $prepare->bind_param('ss', $requestBody['email'], $requestBody['password']);

      $prepare->execute();

      $result = $prepare->get_result();

      if($result->num_rows) {
        $user = mysqli_fetch_assoc($result);
        $_SESSION['id_user'] = $user['id_user'];
        $_SESSION['auth_key'] = $user['auth_key'];

        echo 'Ok';
      } else {
        echo 'Неверный логин или пароль';
      }

      $prepare->close();
      $mysql->close();
    }
  }

?>