<?php
    require_once 'bbdd.php';
?>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <meta author="Grupo DawVersiTeam">
    <title>La Diversidad Mola</title>
</head>
<body>
    <header>
		<a href="listar_imagenes.php"><span class="material-symbols-outlined">arrow_back</span></a>
		<a href="login.html"><span class="material-symbols-outlined">logout</span></a>
    </header>
    <!-- Main de añadir imagen de pais-->
    <main id="mainAddImagenes">
        <div id="addImagenes">
			<h1>NUEVA IMAGEN</h1>
			<form action="anadir.php" method="post">
                <label>Nombre: </label><br/>
                <input type="text" name="nombre"><br/><br/>
                <label>Descripción: </label><br/>
                <textarea name="descripcion"></textarea><br/><br/>
                <label>Imagen: </label><br/>
                <input type="file" name="ruta"><br/><br/>
                <label>País: </label>
                <select name="pais">
					 <?php
                        //Iniciamos conexión con la base de datos
                        require 'bbdd.php';

                        //Consulta 
                        $consulta = "SELECT * FROM paises;";
                        $resultado = $mysqli->query($consulta);
                        
                        while($mostrar = $resultado -> fetch_array(MYSQLI_ASSOC)){
                          echo '<option value="'.$mostrar['id'].'">'.$mostrar['nombre'].'</option>';
                        }
                    ?>
                <select><br/><br/>
				<div>
					<a href="imgpaises.html"><div id="volver">VOLVER</div></a>	
					<input type="submit" name="anadir" value="AÑADIR">
				</div>
			</form>
		</div>
    </main>
</body>
</html>