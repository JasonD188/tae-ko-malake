<?php 
$fullname = $_POST['fullname'];

$message = $_POST['message'];

$conn = new mysqli('localhost', 'root', '', 'Sherepkitechenttee');
if($conn->connect_error) {
    die('connection failed : ' .$conn->connect_error);
} else {
    $stmt = $conn->prepare("insert into contact(fullname, email, message)value(?, ?, ?)");
    $stmt->bind_param("sss", $fullname, $email, $message);
    $stmt->execute();
    echo "Message Sent Sucecessfully...";
    $stmt->close();
    $conn->close();
}
?>