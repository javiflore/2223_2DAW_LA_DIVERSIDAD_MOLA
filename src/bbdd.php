<?php
	require_once 'conect_db.php';

	$mysqli = new mysqli($server, $username, $password, $database);
	$mysqli-> set_charset('utf8');
?>
