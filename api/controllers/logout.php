<?php
  session_start();
  require '../models/User.php';

  $user = new User();
  $user->logout();
?>