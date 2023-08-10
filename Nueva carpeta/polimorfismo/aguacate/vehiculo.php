<?php
// Vehiculo.php
class Vehiculo {
    protected $placa;
    protected $marca;
    protected $color;
    protected $horaIngreso;
    protected $horaSalida;

    public function __construct($placa, $marca, $color, $horaIngreso, $horaSalida) {
        $this->placa = $placa;
        $this->marca = $marca;
        $this->color = $color;
        $this->horaIngreso = $horaIngreso;
        $this->horaSalida = $horaSalida;
    }

    public function getPlaca() {
        return $this->placa;
    }

    public function getMarca() {
        return $this->marca;
    }

    public function getColor() {
        return $this->color;
    }

    public function getHoraIngreso() {
        return $this->horaIngreso;
    }

    public function getHoraSalida() {
        return $this->horaSalida;
    }

    public function calcularValorAPagar() {
        $horaParqueadero = 2; // Costo por hora de parqueadero ($2 USD)

        // Convertir horas de ingreso y salida a objetos DateTime
        $horaIngreso = DateTime::createFromFormat('H', $this->horaIngreso);
        $horaSalida = DateTime::createFromFormat('H', $this->horaSalida);

        // Calcular la diferencia de tiempo (intervalo) entre las horas de ingreso y salida
        $intervalo = $horaSalida->diff($horaIngreso);

        // Obtener el número de horas transcurridas
        $tiempoTranscurrido = $intervalo->h;

        return $horaParqueadero * $tiempoTranscurrido;
    }
}
?>