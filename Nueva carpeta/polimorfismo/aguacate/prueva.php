<?php

// index.php (archivo principal)
require_once 'Parqueadero.php';

// Crear un parqueadero
$parqueadero = new Parqueadero();

// Agregar vehículos y clientes
$cliente1 = new Cliente('Juan Pérez', '123456789');
$vehiculo1 = new Vehiculo('ABC123', 'Toyota', 'Rojo', 9, 14); // Hora de ingreso: 9, Hora de salida: 14
$parqueadero->agregarVehiculo($vehiculo1, $cliente1);

$cliente2 = new Cliente('María Gómez', '987654321');
$vehiculo2 = new Vehiculo('XYZ789', 'Honda', 'Azul', 12, 18); // Hora de ingreso: 12, Hora de salida: 18
$parqueadero->agregarVehiculo($vehiculo2, $cliente2);

// Buscar un vehículo por placa
$placaBuscada = 'ABC123';
$resultadoBusqueda = $parqueadero->buscarVehiculo($placaBuscada);

if ($resultadoBusqueda) {
    $vehiculoEncontrado = $resultadoBusqueda['vehiculo'];
    $clienteVehiculoEncontrado = $resultadoBusqueda['cliente'];

    echo "Vehículo encontrado: " . $vehiculoEncontrado->getPlaca() . "\n";
    echo "Marca: " . $vehiculoEncontrado->getMarca() . "\n";
    echo "Color: " . $vehiculoEncontrado->getColor() . "\n";
    echo "Nombre del cliente: " . $clienteVehiculoEncontrado->getNombre() . "\n";
    echo "Documento del cliente: " . $clienteVehiculoEncontrado->getDocumento() . "\n";
    echo "Hora de ingreso: " . $vehiculoEncontrado->getHoraIngreso() . "\n";
    echo "Hora de salida: " . $vehiculoEncontrado->getHoraSalida() . "\n";
    echo "Valor a pagar: $" . $vehiculoEncontrado->calcularValorAPagar() . " USD\n";
} else {
    echo "Vehículo no encontrado en el parqueadero.\n";
}

?>