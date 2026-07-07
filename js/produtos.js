//ESSE É O CEREBRO DE TUDO DA PAGINA INTEIRA

/*========================================================

                    BC STUDIO
                  PRODUTOS.JS

========================================================*/

/*===========================
        CONFIGURAÇÕES
===========================*/

const JSON_PATH = "../data/produtos.json";

const grid = document.getElementById("products-grid");

const categoriaAtual = document.body.dataset.category;

let produtos = [];

let produtosFiltrados = [];

/*===========================
        CARREGAR JSON
===========================*/

async function carregarProdutos() {

    try {

        const resposta = await fetch(JSON_PATH);

        produtos = await resposta.json();

        produtosFiltrados = produtos.filter(produto =>

            produto.categoria === categoriaAtual

        );

        ordenarProdutos();

    }

    catch (erro) {

        console.error("Erro ao carregar produtos:", erro);

    }

}

/*===========================
        CRIAR CARDS
===========================*/

function criarCards(listaProdutos) {

    grid.innerHTML = "";

    listaProdutos.forEach(produto => {

        grid.innerHTML += criarCard(produto);

    });

}

/*===========================
        CARD HTML
===========================*/

function criarCard(produto) {

    const favorito = produtoFavorito(produto.id);

    return `

    <article class="product-card">

        ${produto.novo ?

            `<span class="tag">

            Novo

        </span>`

            : ""}

        <button

            class="favorite-btn

            ${favorito ? "active" : ""}"

            onclick="alternarFavorito(${produto.id})">

            <i class="${favorito

            ? "fa-solid"

            : "fa-regular"

        } fa-heart"></i>

        </button>

        <div class="image-box">

            <img

                src="${produto.imagem}"

                alt="${produto.nome}"

                loading="lazy">

        </div>

        <div class="product-info">

            <small>

                ${capitalizar(produto.categoria)}

            </small>

            <h3>

                ${produto.nome}

            </h3>

            <p>

                ${produto.descricao}

            </p>

            ${criarEstrelas(produto.avaliacao)}

            <div class="price">

                <span>

                    ${produto.preco.toLocaleString(

            "pt-BR",

            {

                style: "currency",

                currency: "BRL"

            }

        )}

                </span>

                <a

                    href="produto.html?id=${produto.id}"

                    class="btn-product">

                    Ver Produto

                </a>

            </div>

        </div>

    </article>

    `;

}
/*===========================
        ESTRELAS
===========================*/

function criarEstrelas(nota) {

    let html = `<div class="stars">`;

    const cheias = Math.floor(nota);

    const meia = nota % 1 >= 0.5;

    for (let i = 0; i < cheias; i++) {

        html += `<i class="fa-solid fa-star"></i>`;

    }

    if (meia) {

        html += `<i class="fa-solid fa-star-half-stroke"></i>`;

    }

    while ((html.match(/fa-star/g) || []).length < 5) {

        html += `<i class="fa-regular fa-star"></i>`;

    }

    html += `</div>`;

    return html;

}

/*===========================
        TEXTO
===========================*/

function capitalizar(texto) {

    return texto

        .replace("-", " ")

        .replace(/\b\w/g,

            letra => letra.toUpperCase());

}

/*===========================
        INICIAR
===========================*/

carregarProdutos();

/*========================================================

            PESQUISA E ORDENAÇÃO

========================================================*/

// Elementos da página

const searchInput = document.getElementById("searchInput");

const sortProducts = document.getElementById("sortProducts");


/*========================================================

                PESQUISAR

========================================================*/

function pesquisarProdutos() {

    const texto = searchInput.value
        .trim()
        .toLowerCase();

    produtosFiltrados = produtos.filter(produto => {

        return (

            produto.categoria === categoriaAtual &&

            (

                produto.nome.toLowerCase().includes(texto)

                ||

                produto.descricao.toLowerCase().includes(texto)

                ||

                produto.material.toLowerCase().includes(texto)

                ||

                produto.cor.toLowerCase().includes(texto)

                ||

                produto.codigo.toLowerCase().includes(texto)

            )

        );

    });

    ordenarProdutos();

}

/*========================================================

                ORDENAR

========================================================*/

function ordenarProdutos() {

    const tipo = sortProducts.value;

    switch (tipo) {

        case "menor":

            produtosFiltrados.sort((a, b) =>

                a.preco - b.preco

            );

            break;

        case "maior":

            produtosFiltrados.sort((a, b) =>

                b.preco - a.preco

            );

            break;

        case "nome":

            produtosFiltrados.sort((a, b) =>

                a.nome.localeCompare(

                    b.nome,

                    "pt-BR"

                )

            );

            break;

        default:

            produtosFiltrados.sort((a, b) =>

                a.id - b.id

            );

    }

    criarCards(produtosFiltrados);

}

/*========================================================

            EVENTOS

========================================================*/

if (searchInput) {

    searchInput.addEventListener(

        "input",

        pesquisarProdutos

    );

}

if (sortProducts) {

    sortProducts.addEventListener(

        "change",

        ordenarProdutos

    );

}

/*========================================================

                FAVORITOS

========================================================*/

let favoritos = JSON.parse(

    localStorage.getItem("favoritos")

) || [];

/*========================================================

            VERIFICAR FAVORITO

========================================================*/

function produtoFavorito(id) {

    return favoritos.includes(id);

}

/*========================================================

            SALVAR FAVORITOS

========================================================*/

function salvarFavoritos() {

    localStorage.setItem(

        "favoritos",

        JSON.stringify(favoritos)

    );

}

/*========================================================

            ADICIONAR / REMOVER

========================================================*/

function alternarFavorito(id) {

    if (produtoFavorito(id)) {

        favoritos = favoritos.filter(

            item => item !== id

        );

    } else {

        favoritos.push(id);

    }

    salvarFavoritos();

    criarCards(produtosFiltrados);

}