<?php
session_start();

require_once('conexion_bd.php');

$con = new ConexionBD('localhost','root','');

$con->conectar('agenda_jcs');


$result = $con->eventosGetPorUsuario($_SESSION['USUARIO_ID']);

$arrEventos = array();

$respuesta['msg'] = 'ERROR';

if ($result->num_rows>0) {
    while ($reg = $result->fetch_assoc()) {
        $evento = array(
            'id'=>$reg['id'],
            'user_id'=>$_SESSION['USUARIO_ID'],
            'title'=>$reg['asunto'],
            'start'=>$reg['fecha_desde'].' '.$reg['hora_desde'],
            'end'=>$reg['fecha_hasta'].' '.$reg['hora_hasta'],
            'allday'=>$reg['todo_dia']);
        array_push($arrEventos, $evento);
    }   
}

$respuesta['msg'] = 'OK';

$con->desconectar();

$respuesta['eventos'] = $arrEventos;

echo json_encode($respuesta);


 ?>
