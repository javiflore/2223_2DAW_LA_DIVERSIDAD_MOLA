<?php
    $mysqli = new mysqli("localhost", "root", "", "proyecto");
    
    if(isset($_GET['id'])){

        $id = $_GET['id'];

        $borrar = "DELETE FROM paises WHERE id=".$id.";";

        $resultado = $mysqli -> query($borrar);
        
    }
    header("Location: tabla_paises.php");  
?>