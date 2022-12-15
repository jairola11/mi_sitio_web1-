let box3 = document.getElementById("box3");

box3.addEventListener("click", function() {
    if(box3.classList.contains("box3-old")) {
        box3.classList.add("box3-new");
        box3.classList.remove("box3-old");
    }
    else {
        box3.classList.remove("box3-new");
        box3.classList.add("box3-old");
    }
})
let bol2 = document.getElementById('bolbol');

    bol2.addEventListener('click',function(){
        if(bol2.classList.contains('bolOld')){
            bol2.classList.add('bolNew')
            bol2.classList.remove('bolOld')
        }else{
            bol2.classList.add('bolOld')
            bol2.classList.remove('bolNew')
        }
    });
    let b = document.getElementById('bolbol');
    let bol3 = document.getElementById('bolbi');
    
    bol3.addEventListener('click', function(){
        if(bol3.classList.contains('bolOld')){
            bol3.classList.add('bol2New')
            bol3.classList.remove('bolOld')
        }else{
            bol3.classList.add('bolOld')
            bol3.classList.remove('bol2New')
        }
    })