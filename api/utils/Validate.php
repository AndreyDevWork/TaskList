<?php
  class Validate {
    private static $nameRegex = '/^[a-zA-Zа-яА-Я0-9_\s]{2,32}$/u';
    private static $emailRegex = '/^[^\s@]+@[^\s@]+\.[^\s@]+$/';
    private static $passwordRegex = '/^(?=.*[a-zA-Zа-яА-Я0-9])(?=.*[a-zA-Zа-яА-Я])(?=.*[0-9]).{6,}$/u';

    public static function validateName($name) {
      if(preg_match(self::$nameRegex, $name)) {
        return true;
      } else {
        return false;
      }
    }

    public static function validateEmail($email) {
      if(preg_match(self::$emailRegex, $email)) {
        return true;
      } else {
        return false;
      }
    }
    
    public static function validatePassword($password) {
      if(preg_match(self::$passwordRegex, $password)) {
        return true;
      } else {
        return false;
      }
    }

    public static function validateImg($name) {
      if ($_FILES["$name"]['error'] === UPLOAD_ERR_OK) {
        $tmpFilePath = $_FILES["$name"]['tmp_name'];
        if ($imageInfo = getimagesize($tmpFilePath)) {
          $allowedTypes = [IMAGETYPE_JPEG, IMAGETYPE_PNG, IMAGETYPE_GIF];
          if (in_array($imageInfo[2], $allowedTypes)) {
              return true;
          } else {
              return false;
          }
        } else {
            return false;
        }
      }
    }
  }


?>