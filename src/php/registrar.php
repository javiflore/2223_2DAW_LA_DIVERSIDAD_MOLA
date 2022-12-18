<?php
    var_dump($_POST);

    $nickname = $_POST['nickname'];
    $ptos = $_POST['puntuacion'];

    require './login/configuracion/BBDD.php';

    if(!empty($_POST['nickname']) && !empty($_POST['puntuacion'])){
		$records = $conn-> prepare('INSERT INTO partida (alias, puntuacion) VALUES (?, ?);');
		$records -> bind_param('si', $nickname, $ptos);
		$records -> execute();
		$result = $records ->get_result();
		// $fila = $result->fetch_array(MYSQLI_NUM);
       header("Location:../../src/index.html");
	}	
	else{
		header("Location:../../src/index.html");
	}

?>