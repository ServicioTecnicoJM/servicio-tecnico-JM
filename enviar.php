<?php

//Llamando a los campos
$nombre = $_POST['nombre'];
$direccion = $_POST['direccion'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

//Datos para el correo
$destinatario = "servitectlaxcala@gmail.com";
$asunto = "Contacto desde nuestra web Servitec";

$carta = "De: $nombre \n";
$carta .= "Dirección: $direccion \n";
$carta .= "Teléfono: $telefono \n";
$carta .= "Mensaje: $mensaje";

// Enviando mensaje
mail($destinatario, $asunto, $carta);
header('Location:mensaje-de-envio.html')

?>
