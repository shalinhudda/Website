<?php
session_start();
require_once 'libs/phpmailer/PHPMailerAutoload.php';

if(isset($_POST['firstname'], $_POST['lastname'], $_POST['email'], $_POST['subject'], $_POST['message'])){
    $fields=[
        'firstname'=>$_POST['firstname'],
        'lastname'=>$_POST['lastname'],
        'email'=>$_POST['email'],
        'subject'=>$_POST['subject'],
        'message'=>$_POST['message']
    ];

    $m=new PHPMailer(true);
    $m->SMTPDebug = SMTP::DEBUG_SERVER;  
    $m->isSMTP();
    $m->SMTPAuth=true;
    $m->Host='smtp.live.com';
    // Note for people who are looking at this: the following email will not work, use an old account. Some security issue with new accounts.
    $m->Username='me.webstar@hotmail.com';// me.webstar@hotmail.com, replace with your email address
    $m->Password='Whyweeatfood88';// Whyweeatfood88, replace with your password
    $m->SMTPSecure = 'tls'; 
    $m->Port=587;

    $m->isHTML(true);
    $m->Subject = $fields['subject'];
    $m->Body=  'From: '.$fields['firstname'].' '.$fields['lastname'].'<br>'.'Email: '.$fields['email'].'<br>'.'Subject: '.$fields['subject'].'<br>'.'Message: '.$fields['message'];

    $m->FromName= $fields['firstname'].' '.$fields['lastname'];
    $m->From= 'popstars007@hotmail.com'; // me.webstar@hotmail.com
    $m->AddAddress('shalin.hudda97@hotmail.com','Do Not Reply');


    if ($m->send()) {
        header('Location: ../AboutMe-Thanks');
        die();
    }
    else{
        header('Location: ../AboutMe-Error');
        die();
    }

}
else{
    header('Location: ../AboutMe-Error');
    die();
}
