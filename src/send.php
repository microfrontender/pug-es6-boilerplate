<?php

    $to = 'info@paybycps.com'; 
    $subject ='Mail from ChaoPay: ' .$_POST['form-name']. ' '; 
    $message = '
            <html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>
                    <p>Company: '.$_POST['form-company'].'</p>
                    <p>Cod: '.$_POST['form-cod'].'</p>
                    <p>Telephone: '.$_POST['form-tel'].'</p>
                    <p>Comment: '.$_POST['form-comment'].'</p>
                                         
                </body>
            </html>'; 
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
    $headers .= "From: ChaoPay <info@paybycps.com>\r\n"; 
    mail($to, $subject, $message, $headers); 

?>