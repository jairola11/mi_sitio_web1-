<?php

class Cliente{
    
    public $strNombre;
    public $intCedula;

    public function __construct(string $nombre, int $cedula)
    {
        $this->intCedula=$cedula;
        $this->strNombre=$nombre;
    }

    public function getDatosPersonales()
    {
        $datos = ["
        <h2>informacion personal del cliente</h2>
        <h4>Cedula :$this->intCedula</h4>
        <h3>Nombre :$this->strNombre</h3>
        "];
        return $datos;
    }

}
