<?php
	$server = '127.0.0.1';
	$username = 'root';
	$password = '';
	$database = 'diversidad_mola';
	try{
		$conn = new mysqli($server, $username, $password, $database);
	}catch(Exception $e){
		$error = $e->getMessage();
		echo $error;
	}
?>