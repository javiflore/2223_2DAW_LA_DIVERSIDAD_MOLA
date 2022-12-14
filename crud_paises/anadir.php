<?php
    $mysqli = new mysqli("localhost", "root", "", "proyecto");

    if (isset($_POST['anadir'])){

        $nombre = $_POST['nombre'];
        var_dump($_POST);
        $insert="INSERT INTO paises(nombre) VALUES ('$nombre');"; 
        $resultado= $mysqli -> query($insert);
        header ('Location: alta.php');
    }
?>