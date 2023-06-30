let readly = require("readline-sync");
let Option=0



    while (Option !=5) {
        Option(listarmenu);
        if (Option ==1) {
            console.log("register ");
        }
        else if(Option==2){
            console.log('eliminar');
        } else if(Option==3){
            console.log('lista definitiva');
        } else if(Option==4){
            console.log('perdieron');
        }else if(Option==5){
            console.log(' salir');
        }
    }
function listarmenu() {
console.log(
    '-------------------------------------\n'+
    '                  Menu de Notas      \n'+
    '1.           Registrar\n'+
    '2.           Eliminar\n'+
    '3.           lista definitiva\n'+
    '4.           lista de los que perdieron\n'+
    '5.           salir \n'+
    '-------------------------------------------\n'
    );
    return readly.question('dijite una opcion');

}   
