<?php
	require '../php/login/configuracion/BBDD.php';
	$continenete= $_GET['contienente'];
	$records = $conn-> prepare('SELECT imagenes.nombre, ruta, paises.nombre FROM imagenes INNER JOIN paises ON paises.id=idPais');
	
	$records -> execute();
	
		
	$result = $records ->get_result();
	
	//$fila = $result->fetch_array(MYSQLI_NUM);
	while ($row = $result->fetch_assoc()) {
				$camp1 = $row["ruta"];
				$camp2 = $row["nombre"];
				echo"<img src=".$camp1." id=".$camp2.">";
			}
	
	
?>