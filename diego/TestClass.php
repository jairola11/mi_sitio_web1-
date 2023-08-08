<?php

include_once "Cliente.php";
include_once "Vehiculo.php";
include_once "Parqueadero.php";

$cliente2 = new Cliente("jairo lopez", 1007587074);
$vehiculo2 = new Vehiculo($cliente2, "scc312", "Toyota_supra", "blancoperla");
$puestoParqueadero = new Parqueadero($cliente2, $vehiculo2, '15:00:00', '17:00:00');
print_r($puestoParqueadero->setAgregarPisoPuesto());




$allDates = $puestoParqueadero->getAllInformacion();

foreach($allDates as $key){
    echo $key;
}
print_r($puestoParqueadero->getCosto());
