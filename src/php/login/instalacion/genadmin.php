<?php
	require '../configuracion/BBDD.php';
	
	if( !empty($_POST['nombre']) && !empty($_POST['password'])){
		$records = $conn-> prepare("INSERT INTO administrador(nombre, password, perfil ) VALUES (?,?, 'DM');");
		$password = password_hash($_POST['password'], PASSWORD_BCRYPT);
		$records -> bind_param('ss', $_POST['nombre'], $password );
		$records -> execute();
		header("Location:../index_jorge.php");
	}	
	else{
		header("Location:insercionadmin.php");
	}
?>