// ========================================
// MODO ESCURO / CLARO
// ========================================

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeButton.textContent = "☀️";
    } else {
        themeButton.textContent = "🌙";
    }

});


// ========================================
// MOSTRAR HISTÓRIA COMPLETA
// ========================================

const storyButton = document.getElementById("storyButton");
const extraStory = document.getElementById("extraStory");

storyButton.addEventListener("click", () => {

    extraStory.classList.toggle("hidden");

    if (extraStory.classList.contains("hidden")) {
        storyButton.textContent = "Ver mais sobre a história";
    } else {
        storyButton.textContent = "Ocultar história";
    }

});


// ========================================
// QUIZ
// ========================================

const answers = document.querySelectorAll(".answer");
const quizResult = document.getElementById("quizResult");

answers.forEach(answer => {

    answer.addEventListener("click", () => {

        const correct = answer.dataset.correct === "true";

        if (correct) {

            quizResult.textContent = "✅ Acertou! Neymar começou sua carreira profissional no Santos.";
            quizResult.style.color = "#21e26b";

        } else {

            quizResult.textContent = "❌ Não foi dessa vez. Tente novamente!";
            quizResult.style.color = "#ff6b6b";

        }

    });

});


// ========================================
// CONTADORES
// ========================================

const counters = document.querySelectorAll(".counter");

let countersStarted = false;

function startCounters() {

    if (countersStarted) return;

    countersStarted = true;

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        // Para o ano de 2016, exibimos diretamente.
        if (target > 100) {
            counter.textContent = target;
            return;
        }

        let current = 0;

        const increment = Math.max(1, Math.ceil(target / 40));

        const timer = setInterval(() => {

            current += increment;

            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            counter.textContent = current;

        }, 40);

    });

}


// ========================================
// OBSERVAR QUANDO ESTATÍSTICAS APARECEM
// ========================================

const statsSection = document.querySelector(".stats-section");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                startCounters();
            }

        });

    },
    {
        threshold: 0.3
    }
);

observer.observe(statsSection);


// ========================================
// ANIMAÇÃO SUAVE DOS CARDS
// ========================================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});


// ========================================
// ANO AUTOMÁTICO NO CONSOLE
// ========================================

console.log("⚽ Site Futebol & Neymar Jr. carregado com sucesso!");
