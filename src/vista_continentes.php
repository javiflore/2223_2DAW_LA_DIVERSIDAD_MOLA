<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!--<link rel="stylesheet" href="css/style.css">-->
        <meta author="Grupo DawVersiTeam">
        <title>Selección continente</title>
    </head>
    <body>
        <div>
            <h1>SELECCIONA CONTINENTE</h1>
            <form method="post" action="galeria_imagenes.php">
                <select name="continente">
                    <?php
                        //Iniciamos conexión con la base de datos
                        require 'bbdd.php';
	
                        //Consulta 
                        $consulta = "SELECT id, nombre FROM continentes;";
                        $resultado = $mysqli->query($consulta);
                     
                        while($fila = $resultado -> fetch_array(MYSQLI_ASSOC)){
                            echo '<option value="'.$fila['id'].'">'.$fila['nombre'].'</option>';
                        }
                    ?>
                </select>
                <input type="submit" value="ACEPTAR" name="aceptar">
            </form>
        </div>
    </body>
</html>