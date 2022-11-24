let barMenu = document.getElementById("barMenu");
let main_Menu = document.getElementById("mainMenu");

barMenu.addEventListener("click",function() {
    if (main_Menu.classList.contains("mainMenu")) {
        main_Menu.classList.add("main-menu-visible");
        main_Menu.classList.remove("mainMenu");
    } else {
        main_Menu.classList.remove("main-menu-visible");
        main_Menu.classList.add("mainMenu");
    }; 

});