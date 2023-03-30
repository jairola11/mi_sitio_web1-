let imgbox = document.getElementById("imgbox");
let imgMini1 = document.getElementById("imgMini1");
let imgMini2 = document.getElementById("imgMini2");
let imgMini3 = document.getElementById("imgMini3");
let imgMini4 = document.getElementById("imgMini4");
let boxImgMini1 = document.getElementById("boxImgMini1")
let boxImgMini2 = document.getElementById("boxImgMini2")
let boxImgMini3 = document.getElementById("boxImgMini3")
let boxImgMini4 = document.getElementById("boxImgMini4")



imgMini2.addEventListener("click",function(){
    imgbox.setAttribute("src","img/zapatos/image-product-2 - mini.jpg");
    boxImgMini1.classList.remove("box-img-mini");
    boxImgMini2.classList.add("box-img-mini")
    boxImgMini3.classList.remove("box-img-mini")
    boxImgMini4.classList.remove("box-img-mini")
    imgMini1.classList.remove("img-mini-act")
    imgMini2.classList.add("img-mini-act")
    imgMini3.classList.remove("img-mini-act")
    imgMini4.classList.remove("img-mini-act")
});

imgMini3.addEventListener("click",function(){
    imgbox.setAttribute("src","img/zapatos/image-product-3 - mini.jpg");
    boxImgMini1.classList.remove("box-img-mini");
    boxImgMini2.classList.remove("box-img-mini")
    boxImgMini3.classList.add("box-img-mini")
    boxImgMini4.classList.remove("box-img-mini")
    imgMini1.classList.remove("img-mini-act")
    imgMini2.classList.remove("img-mini-act")
    imgMini3.classList.add("img-mini-act")
    imgMini4.classList.remove("img-mini-act")
});
imgMini4.addEventListener("click",function(){
    imgbox.setAttribute("src","img/zapatos/image-product-4 - mini.jpg");
    boxImgMini1.classList.remove("box-img-mini");
    boxImgMini2.classList.remove("box-img-mini")
    boxImgMini3.classList.remove("box-img-mini")
    boxImgMini4.classList.add("box-img-mini")
    imgMini1.classList.remove("img-mini-act")
    imgMini2.classList.remove("img-mini-act")
    imgMini3.classList.remove("img-mini-act")
    imgMini4.classList.add("img-mini-act")
});
imgMini1.addEventListener("click",function(){
    imgbox.setAttribute("src","img/zapatos/image-product-1 - mini.jpg");
    boxImgMini1.classList.add("box-img-mini");
    boxImgMini2.classList.remove("box-img-mini")
    boxImgMini3.classList.remove("box-img-mini")
    boxImgMini4.classList.remove("box-img-mini")
    imgMini1.classList.add("img-mini-act")
    imgMini2.classList.remove("img-mini-act")
    imgMini3.classList.remove("img-mini-act")
    imgMini4.classList.remove("img-mini-act")
});

// function mostarimagen() {
//     imgbox.setAttribute("scr","../img/zapatos/image-product-2 - mini.jpg");
    
// }