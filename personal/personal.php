<?php
require '../negocio/config.php';
require '../negocio/constantes.php';
require '../negocio/database.php';
$db = new Database();
$conexion = $db->conectar();
$consultaCatalogos = $conexion->prepare("CALL ConsultaCataEmpleados();");
$consultaCatalogos->execute();
$catalogos = $consultaCatalogos->fetchAll(PDO::FETCH_ASSOC);
?>
<!doctype html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<meta charset="UTF-8"> 
	<title>Finanzas</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="estilo_interfaz.css"/>
</head>
<body style="background:#daff;">
<div id="nosotros" class="modal" style="display:block;background:#ffad;top:0;">
	<div class="headerForm">
		<h3>Hola, Captura los datos del Empleado</h3>
	</div>
	<form>
		<input id="concepto" name="concepto" value="26" style="display:none;">
		<input id="nombre" type="text" placeholder="ingresa los nombres del Empleado" max="66" required>

		<input id="apellidos" type="text" placeholder="ingresa los apellidos" max="66" required>
		
		<label for="sueldo">Ingresa el sueldo semanal</label>
		<input id="sueldo" type="number" placeholder="Pago semanal" min="600" required>
		
		<input id="telefono" type="tel" placeholder="ingresa el telefono del trabajador" required>
		
		<input id="email" type="email" placeholder="Ingresa el correo electronico">
		
		<input id="rfc" type="text" name="rfc" placeholder="Ingresa el RFC">
		
		<input id="seguro" type="text" name="seguro" placeholder="Ingresa el número de Seguro">
		
		<label for="ingreso">Fecha de ingreso</label>
		<input id="ingreso" type="date" name="ingreso">
		
		<label for="departamento">Departamento</label>
		<select id="departamento" name="departamento">
		<?php
			foreach($catalogos as $depto):
				echo '<option value="'.$depto['idDepto'].'">'.$depto['departamento'].'</option>';
			endforeach;
		?>
		</select>
		
		<label for="rol">Cargo</label>
		<select id="rol" name="rol">
		<?php
			foreach($catalogos as $rol):
				echo '<option value="'.$rol['idRol'].'">'.$rol['rol'].'</option>';
			endforeach;
		?>
		</select>
		<label for="contrato">Tipo de Contrato</label>
		<select id="contrato" name="contrato">
		<?php
		foreach($catalogos as $contrato):
			echo '<option value="'.$contrato['idContrato'].'">'.$contrato['tipo'].'</option>';
		endforeach;
		?>
		</select>
		
		<input id="altaEmpleado" type="submit" value="registrar">
	</form>
	
</div>

</body>
</html>