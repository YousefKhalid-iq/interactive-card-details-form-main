<?php

/*
$cardholderName = $_POST['cardholder__name'];
$cardNum = $_POST['card__num'];
$month = $_POST['month'];
$year = $_POST['year'];
$cvc = $_POST['cvc'];

if (!empty($cardholderName) || !empty($cardNum) || !empty($month) || !empty($year) || !empty($cvc)) {

  $host = "localhost";
  $dbUsername = "Yousef20";
  $dbPassword = "123456_123456";
  $dbname = "card_info";

  $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);

  if (mysqli_connect_error()) {
    die('Connect Error('.mysqli_connect_errno().')'.mysqli_connect_error());
  } else {
    $SELECT = "SELECT card_number From register Where card_number = ? Limit 1";
    $INSERT = "INSERT Into register (name, card_number, exp_date_month, exp_date_year, cvc) values(?, ?, ?, ?, ?)";
    $statment = $conn->prepare($SELECT);
    $statment->bind_param("s", $cardNum);
    $statment->execute();
    $statment->bind_result($cardNum);
    $statment->store_result();
    $rnum = $statment->num_rows();

    if ($rnum == 0) {
      $statment->close();

      $statment = $conn->prepare($INSERT);
      $statment->bind_param("ssssii", $cardholderName, $cardNum, $month, $year, $cvc);
      $statment->execute();
      echo "successfuly sent";
    } else {
      echo "Someone already registered with this card number";
    }
    $statment-> close();
    $conn-> close();
  }
} else {
  echo "all fields are required";
  die();
}
*/

define('DB_HOST', 'localhost');
define('DB_USER', 'Yousef20');
define('DB_PASS', '123456_123456');
define('DB_NAME', 'register');

// Create connection
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

// Check connection
if($conn->connect_error) {
  die('Connection Failed ' . $conn->connect_error);
}

echo 'CONNECTED';
