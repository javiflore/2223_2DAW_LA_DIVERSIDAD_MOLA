<?php
	$server = '2daw.esvirgua.com';
	$username = 'user2daw_10';
	$password = 'ioSic}MOG3JM';
	$database = 'user2daw_BD1-10';
	
	try{
		$conn = new mysqli($server, $username, $password, $database);
	}catch(Exception $e){
		$error = $e->getMessage();
		echo $error;
	}
?>