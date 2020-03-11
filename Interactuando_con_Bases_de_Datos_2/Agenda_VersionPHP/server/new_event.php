<?php
session_start();

require_once('conexion_bd.php');

$con = new ConexionBD('localhost','root','');

$con->conectar('agenda_jcs');

$evento = array(
    'asunto' => $_POST['titulo'],
    'fecha_desde' => $_POST['start_date'],
    'hora_desde' => $_POST['start_hour'],
    'fecha_hasta' => $_POST['end_date'],
    'hora_hasta' => $_POST['end_hour'],
    'todo_dia' => $_POST['allDay']
);


$respuesta['msg'] = 'ERROR';

$result = $con->eventoCrear($_SESSION['USUARIO_ID'], $evento);

$respuesta['msg'] = 'OK';

$con->desconectar();

echo json_encode($respuesta);

?>
