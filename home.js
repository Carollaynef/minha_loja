const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry, index) => {

        if (entry.isIntersecting) {

            setTimeout(() => {

                entry.target.classList.add("mostrar");

            }, index * 180);

        }

    });

});

cards.forEach(card => observer.observe(card));