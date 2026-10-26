const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
const themeBtn = document.getElementById("themeBtn");

menuBtn.addEventListener("click", () => {
    mainNav.classList.toggle("open");
});

mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        mainNav.classList.remove("open");
    });
});

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀";
    } else {
        themeBtn.textContent = "☾";
    }
});


const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".work-card");

filters.forEach(button => {

    button.addEventListener("click", () => {

        filters.forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        const category = button.dataset.filter;

        cards.forEach(card => {

            if (
                category === "all" ||
                card.dataset.category === category
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});


const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", event => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        formMessage.textContent =
            "Пожалуйста, заполните все поля.";

        return;
    }

    if (!email.includes("@")) {

        formMessage.textContent =
            "Введите корректный email.";

        return;
    }

    formMessage.textContent =
        "Сообщение успешно заполнено!";

    form.reset();
});