<?php
session_start();

require_once('conexion_bd.php');

$con = new ConexionBD('localhost','root','');

$con->conectar('agenda_jcs');

$eventoId = $_POST['id'];

$respuesta['msg'] = 'ERROR';

$result = $con->eventosEliminar($_SESSION['USUARIO_ID'], $eventoId);

$respuesta['msg'] = 'OK';

$con->desconectar();

echo json_encode($respuesta);



 ?>
