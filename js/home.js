/*=========================================

        BC STUDIO
        HOME.JS

=========================================*/


//=========================================
// LOADER
//=========================================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 1200);

});



//=========================================
// HEADER AO ROLAR
//=========================================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    }

    else {

        header.classList.remove("scrolled");

    }

});



//=========================================
// BOTÃO VOLTAR AO TOPO
//=========================================

const toTop = document.getElementById("toTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        toTop.classList.add("show");

    }

    else {

        toTop.classList.remove("show");

    }

});

toTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



//=========================================
// MENU MOBILE
//=========================================

const menu = document.getElementById("menu");

const menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("active");

    if (menuBtn.classList.contains("fa-bars")) {

        menuBtn.classList.remove("fa-bars");

        menuBtn.classList.add("fa-xmark");

    }

    else {

        menuBtn.classList.remove("fa-xmark");

        menuBtn.classList.add("fa-bars");

    }

});



//=========================================
// FECHAR MENU AO CLICAR
//=========================================

document.querySelectorAll("#menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

        menuBtn.classList.remove("fa-xmark");

        menuBtn.classList.add("fa-bars");

    });

});

/*=========================================

        SCROLL REVEAL

=========================================*/

const reveals = document.querySelectorAll(

    ".hero, .categorias, .featured, .about, .instagram, .newsletter"

);

function revealSections() {

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < trigger) {

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();



/*=========================================

        FAVORITOS

=========================================*/

const favorites = document.querySelectorAll(".favorite");

favorites.forEach(button => {

    button.addEventListener("click", () => {

        const icon = button.querySelector("i");

        if (icon.classList.contains("fa-regular")) {

            icon.classList.remove("fa-regular");

            icon.classList.add("fa-solid");

            button.style.background = "#E91E63";

            button.style.color = "#fff";

        }

        else {

            icon.classList.remove("fa-solid");

            icon.classList.add("fa-regular");

            button.style.background = "rgba(255,255,255,.12)";

            button.style.color = "#fff";

        }

    });

});



/*=========================================

        EFEITO BRILHO NOS CARDS

=========================================*/

const cards = document.querySelectorAll(".product-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background = `

        radial-gradient(circle at ${x}px ${y}px,

        rgba(233,30,99,.15),

        rgba(255,255,255,.04) 45%)

        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "rgba(255,255,255,.04)";

    });

});



/*=========================================

        ANIMAÇÃO DOS BOTÕES

=========================================*/

const buttons = document.querySelectorAll(

    ".btn-primary, .btn-secondary, .price button"

);

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-5px) scale(1.03)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0) scale(1)";

    });

});



/*=========================================

        ANIMAÇÃO DAS IMAGENS

=========================================*/

const images = document.querySelectorAll(

    ".categoria img, .product-image img, .instagram img"

);

images.forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.filter = "brightness(1.08)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.filter = "brightness(1)";

    });

});



/*=========================================

        SCROLL SUAVE LINKS

=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {

            destino.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/*=========================================

        FAVORITOS (LOCAL STORAGE)

=========================================*/

const favoriteButtons = document.querySelectorAll(".favorite");

let savedFavorites = JSON.parse(localStorage.getItem("bcstudioFavorites")) || [];

favoriteButtons.forEach((button, index) => {

    const icon = button.querySelector("i");

    if (savedFavorites.includes(index)) {

        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");

        button.style.background = "#E91E63";

    }

    button.addEventListener("click", () => {

        if (savedFavorites.includes(index)) {

            savedFavorites = savedFavorites.filter(item => item !== index);

        }

        else {

            savedFavorites.push(index);

        }

        localStorage.setItem(

            "bcstudioFavorites",

            JSON.stringify(savedFavorites)

        );

    });

});



/*=========================================

        FECHAR MENU AO CLICAR FORA

=========================================*/

document.addEventListener("click", (e) => {

    const clickMenu = menu.contains(e.target);

    const clickButton = menuBtn.contains(e.target);

    if (!clickMenu && !clickButton) {

        menu.classList.remove("active");

        menuBtn.classList.remove("fa-xmark");

        menuBtn.classList.add("fa-bars");

    }

});



/*=========================================

        LINK ATIVO

=========================================*/

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    if (link.href === window.location.href) {

        link.classList.add("active");

    }

});



/*=========================================

        PARALLAX HERO

=========================================*/

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("scroll", () => {

    let scroll = window.scrollY;

    heroImage.style.transform =

        `translateY(${scroll * 0.15}px)`;

});



/*=========================================

        CURSOR LUMINOSO

=========================================*/

const glow = document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});

/*=========================================

            TOAST

=========================================*/

const toast = document.createElement("div");

toast.className = "toast";

document.body.appendChild(toast);

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}



/*=========================================

        FAVORITOS COM TOAST

=========================================*/

document.querySelectorAll(".favorite").forEach(btn => {

    btn.addEventListener("click", () => {

        btn.animate([

            { transform: "scale(1)" },

            { transform: "scale(1.3)" },

            { transform: "scale(1)" }

        ], {

            duration: 300

        });

        showToast("Produto adicionado aos favoritos ❤️");

    });

});



/*=========================================

            PESQUISA

=========================================*/

const searchIcon = document.querySelector(".fa-magnifying-glass");

const cardsSearch = document.querySelectorAll(".product-card");

searchIcon.addEventListener("click", () => {

    const pesquisa = prompt("Pesquisar produto:");

    if (!pesquisa) return;

    cardsSearch.forEach(card => {

        const nome = card.innerText.toLowerCase();

        if (nome.includes(pesquisa.toLowerCase())) {

            card.style.display = "block";

        }

        else {

            card.style.display = "none";

        }

    });

});



/*=========================================

        MODAL DO PRODUTO

=========================================*/

const modal = document.createElement("div");

modal.className = "modal";

modal.innerHTML = `

<div class="modal-content">

<span class="close-modal">&times;</span>

<h2>Produto</h2>

<p>

Em breve esta página terá todas as

informações do produto.

</p>

<button class="btn-primary">

Fechar

</button>

</div>

`;

document.body.appendChild(modal);



document.querySelectorAll(".price button").forEach(button => {

    button.addEventListener("click", () => {

        modal.classList.add("open");

    });

});



document.querySelector(".close-modal")

    .addEventListener("click", () => {

        modal.classList.remove("open");

    });



modal.querySelector("button")

    .addEventListener("click", () => {

        modal.classList.remove("open");

    });



modal.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.classList.remove("open");

    }

});



/*=========================================

        ESC

=========================================*/

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        modal.classList.remove("open");

        menu.classList.remove("active");

        menuBtn.classList.remove("fa-xmark");

        menuBtn.classList.add("fa-bars");

    }

});