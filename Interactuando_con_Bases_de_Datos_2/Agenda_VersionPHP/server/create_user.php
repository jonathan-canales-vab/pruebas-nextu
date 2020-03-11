<?php
require_once('conexion_bd.php');

$con = new ConexionBD('localhost','root','');

$con->conectar('agenda_jcs');

//Limpiar datos
$con->ejecutarQuery('delete from evento;');
$con->ejecutarQuery('delete from usaurio;');

//crear usuarios
$con->usuarioCrear('Jonathan Canales', 'jonathan.canales@vab.cl', password_hash("123456", PASSWORD_DEFAULT));
$con->usuarioCrear('Juan Soto', 'juan.soto@vab.cl', password_hash("234wsd", PASSWORD_DEFAULT));
$con->usuarioCrear('Clauda Campos', 'claudia.campos@vab.cl', password_hash("765fde", PASSWORD_DEFAULT));

$con->desconectar();

?>
