<?php

require_once "Vehiculo.php";
require_once "Cliente.php";

class Parqueadero extends Vehiculo{

    public $pisos;
    public $strHoraEntrada;
    public $strHoraSalida;
    public $pisoAsignado; 
    public $puestoAsignado;

        public function __construct(Cliente $cliente, Vehiculo $vehiculo, string $horaEntrada, string $horaSalida)
        {
            parent::__construct($cliente, $vehiculo->strmatricula,$vehiculo->strMarca,$vehiculo->strColor);
            $this->strHoraEntrada=$horaEntrada;
            $this->strHoraSalida=$horaSalida;
            $this->pisos = [
                'nivel1' => [],  
                'nivel2' => [],
                'nivel3' => [],
                'nivel44' => [],
            ];
            $this->pisoAsignado = null; 
            $this->puestoAsignado = null;
        }

      
        public function setAgregarPisoPuesto()
        {
            $puesto = rand(1,10);
            $nivelAle = array_rand($this->pisos);
            if (array_key_exists($nivelAle, $this->pisos)) {
                if (!in_array($puesto, $this->pisos[$nivelAle])) {
                    $this->pisos[$nivelAle][] = $puesto;
                    $this->pisoAsignado = $nivelAle;
                    $this->puestoAsignado = $puesto;
                } else {
                    echo "El puesto $puesto ya está ocupado en el nivel $nivelAle";
                }
            } else {
                echo "El nivel $nivelAle l que estás intentando asignar no existe";
            }
        }

        public function getMostar()
        {
            echo "<table border='1'>";
            echo "<tr><th>Pisos</th><th>Puestos</th><th>Datos</th></tr>";
            foreach ($this->pisos as $piso => $puesto) {
                echo "<tr>";
                echo "<td>" . $piso . "</td>";
                echo "<td>";
                if (count($puesto) > 0) {
                    print_r($puesto);
                } else {
                    echo "No hay puestos en este nivel, está vacío";
                }
                echo "</td>";
                echo "</tr>";
            }
            echo "</table>";
        }

        public function getCosto()
        {
            if($this->strHoraEntrada < 1 || $this->strHoraEntrada > 24 && $this->strHoraSalida < 1 || $this->strHoraSalida > 24){
                return "<h4>ERROR: Por favor ingresa una hora válida entre 1 y 24 horas</h4>";
            }else{
                $this->strHoraEntrada = strtotime($this->strHoraEntrada);
                $this->strHoraSalida = strtotime($this->strHoraSalida);
                $tiempoEstacionado = $this->strHoraSalida - $this->strHoraEntrada;
                $horasEstacionado = ceil($tiempoEstacionado / 3600);
                $tarifa = 2;
                $valorApagar = $horasEstacionado * $tarifa;
                $horaEntrada = date('H:i:s', $this->strHoraEntrada);
                $horaSalida = date('H:i:s', $this->strHoraSalida);
                $horasEstimadas = date('H:i:s', $tiempoEstacionado-3600);
                return "<h4>Tu hora de entrada fue $horaEntrada y la hora de salida fue $horaSalida, tiempo total estacionado: $horasEstimadas. Total a pagar: $$totalAPagar</h4>";
            }
        }

        public function getAllInformacion()
        {
            $datoscliente = $this->getDatosPersonales(); 
            $datoscarro = $this->getDatosPersonalesVehiculo();
            $datosestacinamiento = ["
            <h2>Información del Estacionamiento</h2>
            <h3>Piso: $this->pisoAsignado</h3>
            <h4>Puesto: $this->puestoAsignado</h4>
                            "];
            return array_merge($datoscliente, $datoscarro,$datosestacinamiento);
        }

}

