<?php
    require_once 'bbdd.php';
    var_dump($_POST);

    if(isset($_POST) AND $_POST!=NULL){

        $datos = $_POST;

        foreach($datos as $nombre => $id){

            $delete= "DELETE FROM imagenes WHERE id=".$id.";";
			echo $id;
		    $resultado = $mysqli->query($delete);
        }
       header('Location: listar_imagenes.php');
	   
    }
    else{
      header('Location: listar_imagenes.php?error=1');
        echo 'Seleccione imágenes para borrar';
		
    }
?>