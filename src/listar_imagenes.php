<?php
    //conectamos con la base de datos
    require 'bbdd.php';
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
    <header id="adminHead">
		<span class="material-symbols-outlined">delete_forever</span>
		<a href="alta_imagen.php"><span class="material-symbols-outlined">add_box</span></a>
		<a href="login.html"><span class="material-symbols-outlined">logout</span></a>
       <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF'])?>" method="post">
            <label>Seleccione un continente:</label>
            <select name="continente">
                <option value="">Todos</option>
                <?php
                    //Consulta 
                    $consulta = "SELECT id, nombre FROM continentes;";
                    $resultado = $mysqli->query($consulta);

                    //Mostramos en el select los valores de la tabla continentes para poder filtrar
                    while($fila = $resultado -> fetch_array(MYSQLI_ASSOC)){
                        echo '<option value="'.$fila['id'].'">'.$fila['nombre'].'</option>';
                    }
                 ?>
            </select>
            <!-- Boton para filtrar -->
            <input type="submit" value="FILTRAR" name="filtrar">
        </form>
    </header>
    <!-- Main de la seleccion de continente-->
    <main id="mainImagenesPaises">
		<form id="formImagenes" action="borrar.php" method="post">
			<div id="imagenesPaises">
                <?php
                    // Detectamos cuando se pulse el botón filtrar
                    //var_dump($_POST);

                    if(isset($_POST['filtrar']) AND $_POST['continente']!=''){
                        
                        //Variable del valor del continente
                        $continente = mysqli_real_escape_string($mysqli, $_POST['continente']);
                        
                        //Consulta que filtra las imágenes del continente
                        $consulta = "SELECT imagenes.id as idImagenes, imagenes.nombre, ruta, descripcion, paises.id AS idPais, paises.nombre AS paises FROM ((imagenes
									INNER JOIN paises ON imagenes.idPais = paises.id)
									INNER JOIN continentes ON paises.idContinente = continentes.id)
									WHERE continentes.id =$continente;";
                                    
                        $resultado = $mysqli->query($consulta);
                
                        while($fila = $resultado -> fetch_array(MYSQLI_ASSOC)){
                            echo '<div id="'.$fila['nombre'].'" class="imgPais">
                                        <a href="modificar_imagen.php?id='.$fila['idImagenes'].'&nombre='.$fila['nombre'].'&descripcion='.$fila['descripcion'].'&ruta='.$fila['ruta'].'&idPais='.$fila['idPais'].'">
                                            <img src="img/'.$fila['ruta'].'">
                                        </a>
										<p>'.$fila['paises'].'</p>
                                        <input type="checkbox" value='.$fila['idImagenes'].' name='.$fila['nombre'].'>
                                </div>';
                        }
                    }
                    else{
                        //Cúando $POST no tenga valores pasados muestra todas las imágenes
                        $consulta = "SELECT imagenes.id as idImagenes, imagenes.nombre, ruta, descripcion, paises.id AS idPais, paises.nombre AS paises FROM ((imagenes
									INNER JOIN paises ON imagenes.idPais = paises.id)
									INNER JOIN continentes ON paises.idContinente = continentes.id);";

                        $resultado = $mysqli->query($consulta);
                
                        while($fila = $resultado -> fetch_array(MYSQLI_ASSOC)){
                            echo '<div id="'.$fila['nombre'].'" class="imgPais">
                                        <a href="modificar_imagen.php?id='.$fila['idImagenes'].'&nombre='.$fila['nombre'].'&descripcion='.$fila['descripcion'].'&ruta='.$fila['ruta'].'&idPais='.$fila['idPais'].'">
                                            <img src="img/'.$fila['ruta'].'">
                                        </a>
										<p>'.$fila['paises'].'</p>
                                        <input type="checkbox" value='.$fila['idImagenes'].' name='.$fila['nombre'].'>
                                </div>';
                        }
                    }
                ?>
			</div>
			 <input id="btnBorrar" type="submit" value="BORRAR">
       </form>
    </main>

</body>
</html>