<?Php

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

$to = "imagineer904@gmail.com";
$body = "This is an automated message. Please don't reply this email. n\n $email ";

mail($to,$subject,$body,$message);

echo "Thank you for your inquiry! We will get back to you within 48 hours."

?>