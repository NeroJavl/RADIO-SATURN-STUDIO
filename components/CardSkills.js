const d = document;
export default function generarCards() {
// Definir un objeto con los datos de las cards
const cardsData = [
    {
        imgSrc: "./assets/svg/one.png",
        imgAlt: "HTML icon",
        title: "Counting Stars<br>OneRepublic",
        class: "html"
    },
    {
        imgSrc: "./assets/svg/magick.png",
        imgAlt: "CSS icon",
        title: "24 Magick<br>Bruno Mars",
        class: "css"
    },

    {
        imgSrc: "./assets/svg/inolvidable.png",
        imgAlt: "Javascript icon",
        title: "Inolvidable<br>Reik",
        class: ""
    },

    {
        imgSrc: "./assets/svg/things.png",
        imgAlt: "React icon",
        title: "Beautiful Things<br>Benson Boone",
        class: "React"
    },
    {
        imgSrc: "./assets/svg/estas.png",
        imgAlt: "Sass icon",
        title: "Si no estás<br>Iñigo Quintero",
        class: ""
    },
    {
        imgSrc: "./assets/svg/lose.png",
        imgAlt: "Styled components icon",
        title: "Lose Control<br>Teddy Swims",
        class: ""
    },
    {
        imgSrc: "./assets/svg/taylorr.png",
        imgAlt: "Node.js icon",
        title: "Cruel Summer<br>Taylor Swift",
        class: ""
    },
    {
        imgSrc: "./assets/svg/burr.png",
        imgAlt: "Wordpress icon",
        title: "Lovin On Me<br>Jack Harlow",
        class: ""
    },
    {
        imgSrc: "./assets/svg/ariana.png",
        imgAlt: "Wordpress icon",
        title: "we can’t be friends (wait for your love)<br>Ariana Grande",
        class: "npm"
    },
    
];

// Obtener el contenedor de las cards
const cardsContainer = d.querySelector('.skills__cajas');

// Crear las cards dinámicamente utilizando template strings
for (const data of cardsData) {
    const cardHTML = `
        <div class="skills__caja caja__dark">
            <div class="img">
                <img class="skills__icono skills__icono__dark
                ${data.class}"
                src="${data.imgSrc}"
                alt="${data.imgAlt}">
            </div>
            <div class="skills__texto">
                <p class="text head titulo__dark">
                    ${data.title}
                </p>
            </div>
        </div>
    `;

    // Agregar la card al contenedor
    cardsContainer.insertAdjacentHTML('beforeend', cardHTML);
}
}


generarCards();