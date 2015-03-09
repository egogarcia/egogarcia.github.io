<?php
require_once 'lib/swift_required.php';

// Create the Transport
$transport = Swift_SmtpTransport::newInstance('smtp.1and1.es', 587)
  ->setUsername('info@trackoneservice.com')
  ->setPassword('trackone2013')
  ;

/*
You could alternatively use a different transport such as Sendmail or Mail:

// Sendmail
$transport = Swift_SendmailTransport::newInstance('/usr/sbin/sendmail -bs');

// Mail
$transport = Swift_MailTransport::newInstance();
*/

// Create the Mailer using your created Transport
$mailer = Swift_Mailer::newInstance($transport);

// Create a message
$message = Swift_Message::newInstance('Wonderful Subject')
  ->setFrom(array('CongresosApp@webyo.es' => 'Contacto Contresos y eventos App'))
  ->setTo(array('didacchaves@me.com'))
  ->setBody('Here is the message itself')
  ;

// Send the message
$result = $mailer->send($message);
?>