export default function CardsPortafolio(){
    const portafolioData = [
        {
            imgSrc: "./assets/img/PortfolioImg/sass_portada.png",
            imgAlt: "portada, ecostore",
            titulo: "Radio Saturn",
            skills: ["JavaScript"],
            descripcion: "Radio Online Saturn Studios Cajamarca",
            demoURL: "https://zeno.fm/radio/studios-saturn/",
            repoURL: "https://www.instagram.com/alepossebon_/"
        },
        {
            imgSrc: "./assets/img/PortfolioImg/portada_react_org.png",
            imgAlt: "portada, encriptador de mensajes",
            titulo: "Admisión 2024",
            skills: ["React", "JavaScript"],
            descripcion: "Full Fijas + Libros",
            demoURL: "https://atom.bio/saturnstudio",
            repoURL: "https://www.instagram.com/alepossebon_/"
        },
        {
            imgSrc: "./assets/img/PortfolioImg/encriptador_mensajes_dark.png",
            imgAlt: "portada, encriptador de mensajes",
            titulo: "Servicio Streaming",
            skills: ["JavaScript"],
            descripcion: "Mejores Promos y Combos",
            demoURL: "https://api.whatsapp.com/send?phone=51958749435&text=M%C3%A1s%20info...",
            repoURL: "https://www.instagram.com/alepossebon_/"
        },
        {
            imgSrc: "./assets/img/PortfolioImg/portada_portafolio.png",
            imgAlt: "portada, encriptador de mensajes",
            titulo: "Princess Saturn",
            skills: ["JavaScript"],
            descripcion: "Unete a nuestra comunidad",
            demoURL: "https://www.atom.bio/saturnstudioo",
            repoURL: "https://www.instagram.com/alepossebon_/"
        }
    ];
    
    const skillIcons = {
        Rect: '<i class="fa-brands fa-react fa-beat-fade" style="color: #6beeff;"></i>',
        JavaScrip: '<i class="fa-brands fa-square-js fa-beat-fade" style="color: #ffdb29; font-size: 2rem;"></i>',
        Sas: '<i class="fa-brands fa-sass fa-beat-fade" style="color: #ff00ea;font-size: 1.5   rem;"></i>'
    };
    
    const portafolioContainer = document.querySelector('[data-card]');
    
    for (const data of portafolioData) {
        const cardHTML = `
            <div class="portafolio__trajeta">
                <div class="portafolio__cara faceA">
                    <div class="img__container">
                        <img class="portafolio__img ${data.skills.includes("JavaScript") ? 'ligth__img' : ''}" 
                            src="${data.imgSrc}" alt="${data.imgAlt}">
                    </div>
                    <div class="container__info">
                        <h3 class="portafolio__subtitulo titulo__dark">${data.titulo}</h3>
                        <div class="skills__used">
                            ${data.skills.map(skill => `
                                <div class="tecnology">
                                    ${skillIcons[skill] || ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <div class="portafolio__cara faceB caja__dark caja__dark__portafolio">
                    <p class="portafolio__descripcion titulo__dark">${data.descripcion}</p>
                    <div class="portafolio__botobnes">
                        <a href="${data.demoURL}"target="_blank" rel="nofollow noreferrer noopener">
                            <button class="portafolio__btn boton titulo__dark">
                                <span data-section="portafolio" data-value="demo">Visítanos</span>
                            </button>
                        </a>
                        <a href="${data.repoURL}"target="_blank" rel="nofollow noreferrer noopener">
                            <button class="portafolio__btn boton titulo__dark">
                                <span data-section="portafolio" data-value="repo">Reporte</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        `;
    
        portafolioContainer.insertAdjacentHTML('beforeend', cardHTML);
    }
    
}
