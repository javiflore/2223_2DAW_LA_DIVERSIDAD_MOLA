<?php

    require './login/configuracion/BBDD.php';
    
    $arrayDatos = [];

	$records = $conn-> prepare('SELECT * FROM partida;');
	
	$records -> execute();
		
	$result = $records ->get_result();
	
	//$fila = $result->fetch_array(MYSQLI_NUM);
	while ($row = $result->fetch_assoc()) {
        array_push($arrayDatos, $row);
	}
	
    echo json_encode($arrayDatos);
?>