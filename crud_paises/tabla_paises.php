<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="author" content=" Alberto Bravo Rostro 2DAW">
  <link href="style.css" rel="stylesheet" type="text/css">
	
	<title>Listar</title>
</head>
<body>
    <div>
        <h1>LISTAR PAISES</h1>
        <a href="alta.php"> Añadir </a>
          <table class="default">
            <tr>
              <th>Nombre</th>
              <th>Eliminar</th>
              <th>Modificar</th>
            </tr>
            <?php
                //Conectamos con la base de datos local
                $mysqli = new mysqli("localhost", "root", "", "proyecto");
                // echo"hola";
                //seleccionamos todo lo que hay en tabla paises
                $consulta="SELECT * FROM paises;";
              
                $resultado = $mysqli -> query($consulta);
                //Con fetch_array metemos los datos de la consulta en un array
                while ($fila = $resultado -> fetch_array(MYSQLI_ASSOC)) {
                  echo '<tr>
                          <td>'.$fila['nombre'].'</td>
                          <td><a href="borrar.php?id='.$fila['id'].'"><img src="papelera.png" id="imagen_borrar"></a></td>
                          <td><a href="modificar.php?id='.$fila['id'].'&nombre='.$fila['nombre'].'"><img src="lapiz.png" id="imagen_modificar"></a></td>
                        </tr>';
                }
            ?> 
          </table>
    </div>
</body>
        
    </html>