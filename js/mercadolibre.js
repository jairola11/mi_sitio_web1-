class Automovil{
    constructor(marca,modelo,precio,anyo,ciudad,Kilometros){
        this.marca= marca;
        this.modelo=modelo;
        this.precio=precio;
        this.anyo=anyo;
        this.ciudad=ciudad;
        this.Kilometros=Kilometros;
    }
}

let auto1 = new Automovil("Toyota","Prado 2.8 Tx-l", 200000000, 2021, "pitalito - Huila", 35900);

let inputBusqueda = document.getElementById("inputBusqueda");

// inputBusqueda.addEventListener("load", function(event){
window.addEventListener("load", function(){

    // if(event.key == "Enter"){
    let mainContent = document.getElementById("mainContent");
    let boxAuto = document.createElement("div");
    mainContent.appendChild(boxAuto);
    boxAuto.setAttribute("class", "box-auto");

    //crear contenedor para la imagen//

    let boxImg = document.createElement("div");

        /*corazon imagen*/
    let boxCorazon = this.document.createElement("div");
    boxImg.appendChild(boxCorazon);
    boxCorazon.setAttribute("class", "box-corazon")
    let corazon = this.document.createElement("div");
    boxCorazon.appendChild(corazon);
    corazon.setAttribute("class", "corazon")


    /*cargando icono*/
    let iconHearth = this.document.createElement("i");
    corazon.appendChild(iconHearth);
    iconHearth.setAttribute("class", "icons-style-hearth fa-regular fa-heart");

    boxAuto.appendChild(boxImg);
    let imgAuto = document.createElement("img");
    boxImg.appendChild(imgAuto);
    boxImg.setAttribute("class", "box-img");
    imgAuto.setAttribute("src", "img/Toyota Prado Tx-l 3.0.jpeg")
    imgAuto.setAttribute("class", "img-auto");



    /*crear contenedor para la informacion*/
    let boxInfo = document.createElement("div");
    boxAuto.appendChild(boxInfo);
    let infoMarca = this.document.createElement("div");
    boxInfo.appendChild(infoMarca);
    boxInfo.setAttribute("class", "box-info");
    infoMarca.setAttribute("class", "info-marca");
    let txtMarca = document.createElement("label");
    infoMarca.appendChild(txtMarca);
    txtMarca.innerText =auto1.marca;
    txtMarca.setAttribute("class", "txt-marca")

    let txtModelo = document.createElement("label");
    infoMarca.appendChild(txtModelo);
    txtModelo.innerText= " "+ auto1.modelo;
    txtModelo.setAttribute("class", "txt-modelo")

    /*precio*/
    let precioFormat = new Intl.NumberFormat("de-DE").format(auto1.precio);
    let txtPrecio = this.document.createElement("label");
    boxInfo.appendChild(txtPrecio);
    txtPrecio.innerHTML = "$" + precioFormat;
    txtPrecio.setAttribute("class", "txt-precio")
   

/*kilometraje y procedencia*/
    let boxProcedencia = document.createElement("div");
    boxInfo.appendChild(boxProcedencia);
    boxProcedencia.setAttribute("class", "box-procedencia");

    let txtanyo = document.createElement("label");
    boxProcedencia.appendChild(txtanyo);
    txtanyo.innerHTML = auto1.anyo + " · ";

    let txtKilometros = document.createElement("label");
    boxProcedencia.appendChild(txtKilometros);
    let txtKilometrosFormat = new Intl.NumberFormat("de-DE").format(auto1.Kilometros);
    txtKilometros.innerHTML = txtKilometrosFormat + " · ";

    let txtciudad = document.createElement("label");
    boxProcedencia.appendChild(txtciudad);
    txtciudad.innerHTML = auto1.ciudad;

    let boxLineaDiv = document.createElement("div");
    mainContent.appendChild(boxLineaDiv);
    boxLineaDiv.setAttribute("class", "box-linea-div");
    
}); 
 