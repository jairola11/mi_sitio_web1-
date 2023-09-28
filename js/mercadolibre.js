class Automovil {
    constructor(marca, modelo, version, anyo) {
        this.marca = marca;
        this.modelo = modelo;
        this.version = version;
        this.anyo = anyo;
    }
}

let auto1 = new Automovil("Mazda", "TXL", "viejita", "2023");
let modeloAutomovil = auto1.marca+"  "+ auto1.modelo;

let inputBusqueda = document.getElementById('inptuBuacar');

inputBusqueda.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        let mainConted = document.getElementById('maincontent');
    // creando contenedor para el vehuiculo 
        let boxAuto = document.createElement('div');
        mainConted.appendChild(boxAuto)
        boxAuto.setAttribute("class", "box-auto")
        // creando contenedor para la imagen 
        let boxinfo=document.createElement("div");
        boxAuto.appendChild(boxinfo);
        let txtMarca = document.createElement("label")
        boxinfo.appendChild(textMarca)
        boxinfo
    }
});
