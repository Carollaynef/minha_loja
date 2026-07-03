const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("mostrar");

        }

    });

});

cards.forEach(card => {

    observer.observe(card);

});