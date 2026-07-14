<!DOCTYPE html>
<html lang="pt-BR">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Pulseiras | BC Studio</title>

    <!-- Google Fonts -->

    <link rel="preconnect" href="https://fonts.googleapis.com">

    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Montserrat:wght@300;400;500;600&display=swap"
        rel="stylesheet">

    <!-- Font Awesome -->

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">

    <link rel="stylesheet" href="../css/produtos.css">

</head>

<body data-category="tercos">

    <header id="header">

        <div class="logo">

            <a href="../index.php">

                <h1>BC Studio</h1>

                <span>Elegance in every bead</span>

            </a>

        </div>

        <nav id="menu">

            <a href="../index.php">Início</a>

            <a  href="pulseiras.php">

                Pulseiras

            </a>

            <a href="colares.php">

                Colares

            </a>

            <a class="active" href="tercos.php">

                Terços

            </a>

            <a href="phone-straps.php">

                Phone Straps

            </a>

        </nav>

    </header>

    <section class="banner">

        <div class="banner-content">

            <h1>Terços</h1>

            <p>

                Fé para todos os momentos.

            </p>

        </div>

    </section>

    <section class="filters">

        <input id="searchInput" type="text" placeholder="Pesquisar produto...">

        <select id="sortProducts">

            <option value="default">

                Ordenar

            </option>

            <option value="menor">

                Menor preço

            </option>

            <option value="maior">

                Maior preço

            </option>

            <option value="nome">

                Nome

            </option>

        </select>

    </section>

    <section class="products">

        <div id="products-grid">

        </div>

    </section>

    <footer>

        <h2>

            BC Studio

        </h2>

        <p>

            Elegance in every bead

        </p>

    </footer>

    <script src="../js/produtos.js"></script>

</body>

</html>