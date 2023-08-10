<?php
// Cliente.php
class Cliente {
    protected $nombre;
    protected $documento;

    public function __construct($nombre, $documento) {
        $this->nombre = $nombre;
        $this->documento = $documento;
    }

    public function getNombre() {
        return $this->nombre;
    }

    public function getDocumento() {
        return $this->documento;
    }
}


?>