<?php
    //Conectamos con la base de datos
    require_once 'bbdd.php';
    var_dump($_POST);
    //Detección del botón añadir 
    if(isset($_POST['anadir'])){

        //Declaración de los valores pasados
        $nombre = mysqli_real_escape_string($mysqli, $_POST['nombre']);
        $descripcion = mysqli_real_escape_string($mysqli, $_POST['descripcion']);
        $ruta = mysqli_real_escape_string($mysqli, $_POST['ruta']);
        $pais = mysqli_real_escape_string($mysqli, $_POST['pais']);

        //Consulta de insercción de datos
        $insert = "INSERT INTO imagenes(nombre, descripcion, ruta, idPais) VALUES 
        ('$nombre', '$descripcion', '$ruta', $pais);";

        $resultado = $mysqli->query($insert);

        header("Location: alta_imagen.php");
        exit;
    }
?>