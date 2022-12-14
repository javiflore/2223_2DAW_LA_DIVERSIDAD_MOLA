<?php
    //conectamos con la base de datos
    require 'bbdd.php';

	if(isset($_GET["id"])){

        //var_dump($_GET);
		$id = $_GET["id"];
		$nombre = $_GET["nombre"];
        $descripcion = $_GET["descripcion"];
        $ruta = $_GET['ruta'];
        $pais = $_GET['idPais'];
		
		echo '<html>
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
					<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                    <link rel="stylesheet" href="style.css">
                    <meta author="Grupo DawVersiTeam">
                    <title>Selección continente</title>
                </head>
                <body>
                     <header>
						<a href="imgpaises.html"><span class="material-symbols-outlined">arrow_back</span></a>
						<a href="login.html"><span class="material-symbols-outlined">logout</span></a>
					</header>
					<!-- Main de añadir imagen de pais-->
					<main id="mainModImagenes">
						<div id="modImagenes">
							<h1>MODIFICAR IMAGEN</h1>
							<form action="modificar_imagen.php?id='.$id.'" method="post">
							<label>Nombre: </label><br/>
							<input type="text" name="nombre" value="'.$nombre.'"><br/><br/>
							<label>Descripción: </label><br/>
							<textarea name="descripcion">'.$descripcion.'</textarea><br/><br/>
							<label>Imagen: </label><br/>
							<input type="file" name="ruta" value="'.$ruta.'"><br/><br/>
							<label>País: </label>
							<select name="pais">';
                        
                        //Iniciamos conexión con la base de datos
                        require 'bbdd.php';

                        //Consulta 
                        $consulta = "SELECT * FROM paises;";
                        $resultado = $mysqli->query($consulta);
						
                        while($mostrar = $resultado -> fetch_array(MYSQLI_ASSOC)){
							if($mostrar['id']==$pais){
								echo '<option value="'.$mostrar['id'].'" selected>'.$mostrar['nombre'].'</option>';
							}else{
								echo '<option value="'.$mostrar['id'].'">'.$mostrar['nombre'].'</option>';
							}
                        
                        }
                        
                    echo'</select><br/><br/>
						<div>
							<a href="listar_imagenes.php"><div id="volver">CANCELAR MODIFICACIÓN</div></a>
							<input type="submit" name="modificar" value="MODIFICAR">
						</div>
                    </form>           
                </body>
             </html>';
	}else{
        require_once 'listar_imagenes.php';
    }
	
	
    if(isset($_POST["modificar"])){

		$id = $_GET["id"];
		$nuevoNombre = $_POST["nombre"];
        $nuevaDescripcion = $_POST["descripcion"];
        $nuevaRuta = $_POST["ruta"];
        $nuevoPais = $_POST["pais"];
        
		$update = 'UPDATE imagenes 
					SET nombre = "'.$nuevoNombre.'", descripcion = "'.$nuevaDescripcion.'", ruta = "'.$nuevaRuta.'", idPais = "'.$nuevoPais.'"
					
					WHERE id = "'.$id.'"
				';

		$resultado = $mysqli->query($update);
		
		$mysqli -> close();
		
		header('Location: listar_imagenes.php');
	}
?>