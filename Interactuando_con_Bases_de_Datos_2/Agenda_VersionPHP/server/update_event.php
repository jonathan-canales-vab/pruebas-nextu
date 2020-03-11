<?php
session_start();

require_once('conexion_bd.php');

$con = new ConexionBD('localhost','root','');

$con->conectar('agenda_jcs');

$eventoId = $_POST['id'];

$evento = array(
    'fecha_desde' => $_POST['start_date'],
    'hora_desde' => $_POST['start_hour'],
    'fecha_hasta' => $_POST['end_date'],
    'hora_hasta' => $_POST['end_hour']
);


$respuesta['msg'] = 'ERROR';

$result = $con->eventoActualizar($_SESSION['USUARIO_ID'], $eventoId, $evento);

$respuesta['msg'] = 'OK';

$con->desconectar();

echo json_encode($respuesta);
 


 ?>
