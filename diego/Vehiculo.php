<?php

include_once "Cliente.php";

class Vehiculo extends Cliente{

    public $strmatricula; 
    public $strMarca;
    public $strColor;

    public function __construct(Cliente $cliente, string $matricula, string $marca, string $color)
    {
        parent::__construct($cliente->strNombre, $cliente->intCedula);

        $this->strmatricula=$matricula;
        $this->strMarca=$marca;
        $this->strColor=$color;
    }
    public function getDatosPersonalesVehiculo()
    {
        $datoscarro = ["
            <h2>Información del carro</h2>
            <h3>Placa: $this->strmatricula</h3>
            <h4>Marca: $this->strMarca</h4>
            <h4>Color: $this->strColor</h4>
        "];

        return array_merge($datoscarro);
    }
}