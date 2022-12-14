<?php
$mysqli = new mysqli("localhost", "root", "", "proyecto");
//var_dump($_GET);
// echo $_GET ['nombre'];
if(isset($_GET['id'])){
    $nombre = $_GET ['nombre'];
       
    echo '<html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="author" content=" Alberto Bravo Rostro 2DAW">
            <title>Modificar</title>
        </head>
        <body>
        <form action="modificar.php" method="post">
        <label>Nuevo nombre:</label>
            <input type="text" value="'.$nombre.'" name="nombre">
            <input type="submit" name="modificar" value="modificar">
        </form>
        </body>
        </html>
        ';
  
}
if(isset($_POST['modificar'])){
    var_dump($_POST);
    echo $_POST['nombre'];

    $nuevonombre= $_POST['nombre'];

    $update="UPDATE paises
    SET nombre=$nuevonombre;";
    
    $resultado = $mysqli -> query($update);

}

?>