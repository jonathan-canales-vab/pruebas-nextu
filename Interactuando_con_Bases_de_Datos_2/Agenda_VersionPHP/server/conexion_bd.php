<?php

class ConexionBD{
    private $host;
    private $user;
    private $password;
    private $conexion;
    
    function __construct($host, $user, $password){
        $this->host = $host;
        $this->user = $user;
        $this->password = $password;
    }
    
    function conectar($nombre_db){
        $this->conexion = new mysqli($this->host, $this->user, $this->password, $nombre_db);
        if ($this->conexion->connect_error) {
            return "Error:" . $this->conexion->connect_error;
        }else {
            return "OK";
        }
    }
    
    function ejecutarQuery($query){
        return $this->conexion->query($query);
    }
    
    function desconectar(){
        $this->conexion->close();
    }
    
    function usuarioCrear($nombre, $email, $clave){
        $sql = "INSERT INTO usaurio (id, nombre, email, clave) VALUES (NULL, '".$nombre."', '".$email."', '".$clave."');";
        return $this->ejecutarQuery($sql);
    }
    
    function usuarioGetPorLogin($login) {
        $query = "select * from usaurio where email = '".$login."';";
        return $this->ejecutarQuery($query);
    }
    
    function eventosGetPorUsuario($usarioId) {
        $query = "SELECT id, asunto, fecha_desde, fecha_hasta, hora_desde, hora_hasta, todo_dia FROM evento "
            ."WHERE usaurio_id = ".$usarioId.";";
        return $this->ejecutarQuery($query);
    }    
    
    function eventoCrear($usarioId, $evento){
        $sql = "INSERT INTO evento (id, usaurio_id, asunto, fecha_desde, fecha_hasta, hora_desde, hora_hasta, todo_dia) "
            ."VALUES (NULL, ".$usarioId.", '".$evento['asunto']."', '".$evento['fecha_desde']."', '".$evento['fecha_hasta']."',"
            ." '".$evento['hora_desde']."', '".$evento['hora_hasta']."', '".$evento['todo_dia']."');";
        return $this->ejecutarQuery($sql);
    }
    
    function eventosEliminar($usarioId, $eventoId) {
        $query = "DELETE FROM evento WHERE usaurio_id = ".$usarioId." and id = ".$eventoId.";";
            return $this->ejecutarQuery($query);
    }
    
    function eventoActualizar($usarioId, $eventoId, $evento){
        $sql = "UPDATE evento "
            ." SET fecha_desde = '".$evento['fecha_desde']."', "
            ."fecha_hasta = '".$evento['fecha_hasta']."', "
            ."hora_desde = '".$evento['hora_desde']."', "
            ."hora_hasta = '".$evento['hora_hasta']."' "
            ." WHERE usaurio_id = ".$usarioId." and id = ".$eventoId.";";
        return $this->ejecutarQuery($sql);
    }
}
?>