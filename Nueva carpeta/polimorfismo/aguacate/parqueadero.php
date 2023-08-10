<?php

// Parqueadero.php
require_once 'Cliente.php';
require_once 'Vehiculo.php';

class Parqueadero extends Vehiculo {
    private $pisos = array();

    public function agregarVehiculo(Vehiculo $vehiculo, Cliente $cliente) {
        $this->pisos[] = array(
            'vehiculo' => $vehiculo,
            'cliente' => $cliente
        );
    }

    public function buscarVehiculo($placa) {
        foreach ($this->pisos as $piso) {
            if ($piso['vehiculo']->getPlaca() === $placa) {
                return $piso;
            }
        }
        return null;
    }
}

?>