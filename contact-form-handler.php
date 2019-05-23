<?php 
$errors = ''; //error bericht
$myemail = 'timosmit95@gmail.com';
if(empty($_POST['firstname'])  ||
	empty($_POST['lastname']) ||  
   empty($_POST['email']) || 
   empty($_POST['text']))
{
    $errors .= "\n Error: All fields are required.";
}

$firstname = $_POST['firstname']; 
$lastname = $_POST['lastname']; 
$email_address = $_POST['email']; 
$message = $_POST['text']; 

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$email_address))
{
    $errors .= "\n Error: Wrong email.";
    
}

if( empty($errors))
{	//Bericht laten zien
	$to = $myemail; 
	$email_subject = "Contact form: $firstname $lastname";
	$email_body = "New message. ".
	" Details:\n Name: $firstname $lastname \n Email: $email_address \n Bericht \n $message"; 
	
	$headers = "From: $myemail\n"; 
	$headers .= "Reply-To: $email_address";
	
	mail($to,$email_subject,$email_body,$headers);
	//Naar verzonden pagina
	header('Location: contact.html');
} 
?>

