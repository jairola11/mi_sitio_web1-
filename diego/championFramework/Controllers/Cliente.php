<?php

    class Cliente extends Controllers{

        public function __construct()
        {
            parent::__construct();
        }

        public function cliente($idCliente) {
            echo "cliente".$idCliente;
        }
        public function clientes() {
            echo "clientes";
        }
        public function registro() {
            try {
                // dep($_SERVER);
                // exit();
            $method= $_SERVER['REQUEST_METHOD'];
            $response=[];
            if ($method == "POST") {
                $response = array(
                    'status'=>true,
                    'msg'=>"datos Guardados"
                );
                $code= 200;
            }else{
                $response = array(
                    'status'=> false,
                    'msg'=>"error en la solicitud: ".$method
                );
                $code= 400;
            }

            jsonResponse($response,$code);
            die();

            } catch (Exception $e) {
                echo "error en el proceso".$e->getMessage();
            }
        }
        public function actualizar($idCliente) {
            echo "actualizar".$idCliente;
        }
        public function eliminar($idCliente) {
            echo "eliminar".$idCliente;
        }

    }


?>