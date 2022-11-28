<?php
	require 'configuracion/BBDD.php';
	
	if(!empty($_POST['nombre']) && !empty($_POST['password'])){
		$records = $conn-> prepare('SELECT id, nombre, password, perfil FROM administrador WHERE nombre = ?');
		$records -> bind_param('s', $_POST['nombre']);
		$records -> execute();
		$result = $records ->get_result();
		$fila = $result->fetch_array(MYSQLI_NUM);
		$message = '';
		if($result && password_verify($_POST['password'], $fila[2])){
			session_start();
			$_SESSION['id'] = $fila[0];
			$_SESSION['nombre'] = $fila[1];
			$_SESSION['perfil'] = $fila[3];
			header("Location:logueado.php");
		}else{
			header("Location:index_jorge.php");
		}
	}	
	else{
		header("Location:index_jorge.php");
	}
?>