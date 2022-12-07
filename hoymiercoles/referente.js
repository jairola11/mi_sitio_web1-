function enviar() {
    let v,ele,li,fe
    v = document.getElementById('valor').value
    console.log(v);
    ele=document.getElementById('elemento').value
    console.log(ele);
    li=document.getElementById('licencia').value
    if (li==1) {
        tpl='Libre'
    }else if (li==2) {
        tpl='GPL'
    }else{
        tpl='Publica'
    }
    console.log(tpl);
    fe=document.getElementById('fecha').value
    console.log(fe);
    document.getElementById('elem').innerHTML="<b>elemento..</b>"+ele
    document.getElementById('resultado').innerHTML="<b>hola..</b>"+v
    document.getElementById('lic').innerHTML="<b>licencia..</b>"+tpl
    document.getElementById('fecha').innerHTML="<b>fecha..</b>"+fe
}