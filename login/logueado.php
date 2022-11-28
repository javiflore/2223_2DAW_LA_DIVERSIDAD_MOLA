<?php
	session_start();
	if(isset($_POST["btnCerrar"])){
		session_destroy();
		header('location:index.php');
	}
	if($_SESSION['perfil']!='DM')
	{
		header("Location:index.php");
	}
	else{
		echo('Estas logueado correctamente: ');	
		echo ($_SESSION['nombre']);
	}
	

?>
<html>
	<header>
	</header>
	<body>
		<form method="POST">
			<input type="submit" value="Cerrar sesion" name="btnCerrar" />
		</form>
	</body>
</html>