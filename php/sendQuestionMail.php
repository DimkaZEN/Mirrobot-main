<?php
if(isset($_POST['name']) && isset($_POST['phone']) && isset($_POST['question']) && isset($_POST['mailTo'])) {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $question = $_POST['question'];
    $mailTo = $_POST['mailTo'];

    $to = $mailTo;
    $subject = 'Mirrobot: вопрос';
    $message = "Имя: $name\nТелефон: $phone\nВопрос: $question";
    $headers = "From: kovalenkoaliona82@gmail.com\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    if(mail($to, $subject, $message, $headers)) {
        echo "Письмо успешно отправлено.";  
        header("Location: " . "../index.html");      
        exit();
    } else {
        echo "Ошибка при отправке письма.";
        header("Location: " . "../index.html");
        exit();
    }
}

?>

