<?php
if(isset($_POST['name']) && isset($_POST['phone']) && isset($_POST['town'] && isset($_POST['mailTo']))) {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $town = $_POST['town'];
    $mailTo = $_POST['mailTo'];

    $to = $mailTo; 
    $subject = 'Mirrobot: запись на занятие';
    $message = "Имя: $name\nТелефон: $phone\nГород: $town";
    $headers = "From: kovalenkoaliona82@gmail.com\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    if(mail($to, $subject, $message, $headers)) {
        echo "Письмо успешно отправлено.";   
        header("Location: " . "../mobile.html");     
        exit();
    } else {
        echo "Ошибка при отправке письма.";
        header("Location: " . "../mobile.html");
        exit();
    }
}

?>

