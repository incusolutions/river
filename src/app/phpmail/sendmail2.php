<?php

header("Access-Control-Allow-Origin: https://thknew.valcorpdigital.com"); // Cambia a tu dominio
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger el contenido JSON del cuerpo de la solicitud
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);

    // Verificar si la decodificación del JSON fue exitosa
    if (is_array($data)) {
        $name = trim($data['name']);
        $sugee = trim($data['sugee']);
    
        // Inicializar PHPMailer
        $mail = new PHPMailer(true);                              
        try {
            // Configuración del servidor
            $mail->isSMTP();                                      // Usar SMTP
            $mail->Host = 'smtp.titan.email';                     // Servidor SMTP
            $mail->SMTPAuth = true;                               // Habilitar autenticación SMTP
            $mail->Username = 'thrifty@valcorpdigital.com';       // Nombre de usuario SMTP
            $mail->Password = '32RdVYA5186f$';                    // Contraseña SMTP
            $mail->SMTPSecure = 'tls';                            // Habilitar encriptación
            $mail->Port = 587;                                    // Puerto SMTP                     
            $mail->Timeout  = 30;
            $mail->AuthType = 'LOGIN';

            // Destinatarios   

           // valcorpdigitalllc@gmail.com,ivanmoreno2007@gmail.com
            $mail->setFrom('thrifty@valcorpdigital.com');         // Dirección del remitente
            $mail->addAddress('jromero79@unab.edu.co');
            //$mail->addAddress('valcorpdigitalllc@gmail.com');           // Agregar el destinatario
            //$mail->addCC('ivanmoreno2007@gmail.com', 'CC Ivan moreno');
            $mail->addCC('incusolutions@gmail.com', 'CC Ivan moreno');
            $mail->addReplyTo('valcorpdigitalllc@gmail.com');         // Dirección para respuestas     

            // Contenido del correo
            $mail->isHTML(true);                                  
            $mail->Subject = 'Riverviewfreshmarket Suggestion Form Message';
            $mail->Body = 'Name: '.$name. '<br> Suggestion: ' .$sugee. '<br>';
            
            $mail->send();
            echo json_encode(['status' => 'success', 'message' => 'The message has been sent']);
        } catch (Exception $e) {
            echo json_encode(['status' => 'error', 'message' => 'The message could not be sent. Mailer Error: ' . $mail->ErrorInfo]);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Invalid JSON data.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method.']);
}
?>
