<?php

require_once '../assets/lib/swift_required.php';
$return = "{";
$send = true;
if (filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
    $return .= '"emailMessage": "",';
} else {
    $send = false;
    $return .= '"emailMessage": "false",';
}
if ($_POST["subject"]) {
    $return .= '"subjectMessage": "",';
} else {
    $send = false;
    $return .= '"subjectMessage": "false",';
}
if (preg_match("/^[0-9]{9}$/", $_POST["phone"])) {
    $return .= '"phoneMessage": "",';
} else {
    $send = false;
    $return .= '"phoneMessage": "false",';
}
if ($_POST["message"]) {
    $return .= '"messageMessage": ""';
} else {
    $send = false;
    $return .= '"messageMessage": "false"';
}
$return .="}";

if ($send) {
// Create the Transport

    $transport = Swift_SmtpTransport::newInstance('smtp.gmail.com', 465, 'ssl')
            ->setUsername('noreply@webyo.es')
            ->setPassword('WebYo2014')
    ;

// Create the Mailer using your created Transport
    $mailer = Swift_Mailer::newInstance($transport);

// Create a message
    $message = Swift_Message::newInstance($_POST["subject"])
            ->setFrom(array($_POST["email"]))
            ->setTo(array('didacchaves@me.com'))
            ->setBody("<b>Contacto desde AppCongress:</b> \n\n el/la " . $_POST["email"] . " Con telefono: " . $_POST["phone"] . "\n Envia el siguiente mensaje: \n\n" . $_POST["message"])
    ;

// Send the message
    $result = $mailer->send($message);
}
echo $return;
?>