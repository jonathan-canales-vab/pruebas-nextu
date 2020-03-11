<?php
require_once('conexion_bd.php');

$con = new ConexionBD('localhost','root','');

$con->conectar('agenda_jcs');

$login = $_POST['username'];
$passwd = $_POST['password'];

$result = $con->usuarioGetPorLogin($login);

$respuesta['msg'] = 'ERROR';

if ($result->num_rows>0) {
    $usuario = $result->fetch_assoc();
    if (password_verify($passwd, $usuario['clave'])) {
        $respuesta['msg'] = 'OK';
        
        session_start();
        $_SESSION['USUARIO_ID'] = $usuario['id'];
        $_SESSION['USUARIO_LOGIN'] = $usuario['email'];
    }
    else {
        $respuesta['msg'] = 'Clave no válida';
    }
}
else {
    $respuesta['msg'] = 'Usuario no válido';
}

$con->desconectar();

echo json_encode($respuesta);

 ?>
