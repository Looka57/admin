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

// Compteur chiffre cards
$(document).ready(function () {
    $('.cardNumber').counterUp({
        delay: 10, // Intervalle entre chaque incrémentation
        time: 1200 // Durée totale de l'animation
    });
});

// graphique Absences retars
const barCanvas = document.querySelector('#absencesChart');
const barChart = new Chart(barCanvas, {
    type: 'bar',
    data: {
        labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        datasets: [
            {
                label: 'Retards',
                data: [12, 9, 14, 10, 8, 6, 7, 9, 12, 11, 15, 10], // Données des retards
                backgroundColor: 'rgba(255, 102, 22 , 0.8)',
                borderColor: 'rgba(255, 102, 22, 1)',
                borderWidth: 1,
                borderRadius: 10
            },
            {
                label: 'Absences',
                data: [5, 7, 6, 9, 10, 4, 3, 6, 8, 7, 5, 6], // Données des absences
                backgroundColor: 'rgba(21, 26, 55, 0.8)',
                borderColor: 'rgba(21, 26, 55, 1)',
                borderWidth: 1,
                borderRadius: 10
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const pieCanvas = document.querySelector('#stagiaireChart');
const pieChart = new Chart(pieCanvas, {
    type: 'doughnut',
    data: {
        labels: ['Hommes', 'Femmes'], // Ajout des labels globaux pour la légende
        datasets: [
            {
                label: 'Hommes',
                data: [45, 0], // Ajout d'une deuxième valeur nulle pour bien gérer le cercle
                backgroundColor: ['rgba(21, 26, 55, 0.8)', 'rgba(21, 26, 55, 0.3)'],
                borderColor: ['rgba(21, 26, 55, 1)', 'rgba(21, 26, 55, 0.5)'],
                borderWidth: 1,
                cutout: '70%',
            },
            {
                label: 'Femmes',
                data: [0, 30], // Même principe pour le deuxième dataset
                backgroundColor: ['rgba(255, 102, 22, 0.3)', 'rgba(255, 102, 22, 0.8)'],
                borderColor: ['rgba(255, 102, 22, 0.5)', 'rgba(255, 102, 22, 1)'],
                borderWidth: 1,
                cutout: '50%',
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    usePointStyle: true, // Petits ronds pour la légende
                    font: {
                        size: 14
                    },
                    generateLabels: function (chart) {
                        return [
                            {
                                text: 'Hommes',
                                fillStyle: 'rgba(21, 26, 55, 0.8)', // Bleu foncé
                                strokeStyle: 'rgba(21, 26, 55, 1)',
                                lineWidth: 1,
                                hidden: false,
                            },
                            {
                                text: 'Femmes',
                                fillStyle: 'rgba(255, 102, 22, 0.8)', // Orange foncé
                                strokeStyle: 'rgba(255, 102, 22, 1)',
                                lineWidth: 1,
                                hidden: false,
                            }
                        ];
                    }
                }
            }
        }
    },
    plugins: [{
        beforeDraw: function (chart) {
            let width = chart.width,
                height = chart.height,
                ctx = chart.ctx;

            ctx.restore();
            let image = new Image();
            image.src = 'https://img.icons8.com/ios-filled/50/couple-posing.png'; 
            let imageSize = 80; 
            
            let x = (width / 2.37) - (imageSize / 2),
                y = (height / 2) - (imageSize / 2);
            
            ctx.drawImage(image, x, y, imageSize, imageSize);
            ctx.save();
        }
    }]
});