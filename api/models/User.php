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

      $mysql = DataBase::connectDB();
      $prepare = $mysql->prepare("SELECT * FROM `users` WHERE `email` = ? AND `password` = ?");
      $prepare->bind_param('ss', $_POST['email'], $_POST['password']);

      $prepare->execute();

      $result = $prepare->get_result();

      if($result->num_rows) {
        $user = mysqli_fetch_assoc($result);
        $_SESSION['id'] = $user['id'];
        $_SESSION['auth_key'] = $user['auth_key'];

        $prepareUpdate = $mysql->prepare("UPDATE `users` SET `last_visit` = ? WHERE `email` = ? AND `password` = ?");
        $prepareUpdate->bind_param('sss', date('Y-m-d H:i:s'), $_POST['email'], $_POST['password']);
        $prepareUpdate->execute();

        echo 'Ok';
      } else {
        echo 'Неверный логин или пароль';
      }

      $prepare->close();
      $prepareUpdate->close();
      $mysql->close();
    }
  }

?>