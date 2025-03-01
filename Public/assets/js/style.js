// Ajouter un hover  a la liste des items selectionné

let list = document.querySelectorAll(".navigation li");

function activeLink() {
    list.forEach((item) => {
        item.classList.remove("hovered");
        let img = item.querySelector(".icon img"); // Sélection de l'image à l'intérieur
        if (img) {
            img.classList.remove("iconHovered");
        }
    });

    this.classList.add("hovered");
    let img = this.querySelector(".icon img");
    if (img) {
        img.classList.add("iconHovered");
    }
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));



// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let mainMenu = document.querySelector(".main")

toggle.addEventListener("click", () => {
    navigation.classList.toggle("active");
    mainMenu.classList.toggle("active");
});
