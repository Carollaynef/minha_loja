//É PROS PRODUTOS EM GERAL

/*====================================================

                BC STUDIO
                PRODUTO.JS

====================================================*/

// Caminho do JSON
const JSON_PATH = "../data/produtos.json";

// Número do produto vindo da URL
const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));

// Elementos da página
const mainImage = document.getElementById("mainImage");
const productCategory = document.getElementById("productCategory");
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productDescription = document.getElementById("productDescription");
const material = document.getElementById("material");
const color = document.getElementById("color");
const code = document.getElementById("code");
const stars = document.getElementById("stars");
const relatedProducts = document.getElementById("relatedProducts");
const whatsappButton = document.getElementById("whatsappButton");

/*====================================================

            CARREGAR PRODUTO

====================================================*/

async function loadProduct() {

    try {

        const response = await fetch(JSON_PATH);
        const products = await response.json();

        const product = products.find(item => item.id === productId);

        if (!product) {

            document.querySelector(".product-page").innerHTML = `
                <h2>Produto não encontrado.</h2>
            `;

            return;

        }

        fillProduct(product);

        createRelated(products, product);

    }

    catch (error) {

        console.error(error);

    }

}

/*====================================================

            PREENCHER DADOS

====================================================*/

function fillProduct(product) {

    document.title = `${product.nome} | BC Studio`;

    mainImage.src = product.imagem;
    mainImage.alt = product.nome;

    productCategory.textContent = product.categoria;

    productName.textContent = product.nome;

    productPrice.textContent =
        product.preco.toLocaleString("pt-BR", {

            style: "currency",

            currency: "BRL"

        });

    productDescription.textContent = product.descricao;

    material.textContent = product.material;

    color.textContent = product.cor;

    code.textContent = product.codigo;

    createStars(product.avaliacao);

    const message =

        `Olá! Tenho interesse no produto:

${product.nome}

Código: ${product.codigo}`;

    whatsappButton.href =
        `https://wa.me/55SEUNUMERO?text=${encodeURIComponent(message)}`;

}

/*====================================================

            ESTRELAS

====================================================*/

function createStars(rate) {

    stars.innerHTML = "";

    const full = Math.floor(rate);

    const half = rate % 1 >= 0.5;

    for (let i = 0; i < full; i++) {

        stars.innerHTML +=
            `<i class="fa-solid fa-star"></i>`;

    }

    if (half) {

        stars.innerHTML +=
            `<i class="fa-solid fa-star-half-stroke"></i>`;

    }

    while (stars.children.length < 5) {

        stars.innerHTML +=
            `<i class="fa-regular fa-star"></i>`;

    }

}

/*====================================================

        PRODUTOS RELACIONADOS

====================================================*/

function createRelated(products, current) {

    relatedProducts.innerHTML = "";

    const related = products.filter(item =>

        item.categoria === current.categoria &&

        item.id !== current.id

    );

    related.slice(0, 4).forEach(product => {

        relatedProducts.innerHTML += `

        <article class="related-card">

            <img src="${product.imagem}"
                 alt="${product.nome}">

            <h3>

                ${product.nome}

            </h3>

            <p>

                ${product.preco.toLocaleString("pt-BR", {

            style: "currency",

            currency: "BRL"

        })}

            </p>

            <a

            href="produto.html?id=${product.id}"

            class="btn-primary">

                Ver Produto

            </a>

        </article>

        `;

    });

}

/*====================================================

            ZOOM DA IMAGEM

====================================================*/

mainImage.addEventListener("mousemove", (e) => {

    const x =

        (e.offsetX / mainImage.offsetWidth) * 100;

    const y =

        (e.offsetY / mainImage.offsetHeight) * 100;

    mainImage.style.transform = "scale(1.7)";

    mainImage.style.transformOrigin = `${x}% ${y}%`;

});

mainImage.addEventListener("mouseleave", () => {

    mainImage.style.transform = "scale(1)";

    mainImage.style.transformOrigin = "center";

});

/*====================================================

            INICIAR

====================================================*/

loadProduct();