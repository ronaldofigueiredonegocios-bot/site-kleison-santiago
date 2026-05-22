window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    navbar.classList.toggle("navbar-scroll", window.scrollY > 50);

});

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealOnScroll);

function revealOnScroll(){

    for(let i = 0; i < reveals.length; i++){

        const windowHeight = window.innerHeight;

        const revealTop = reveals[i].getBoundingClientRect().top;

        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            reveals[i].classList.add("active");

        }

    }

}


const formContato = document.getElementById("formContato");

if(formContato){
    formContato.addEventListener("submit", function(event){
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const telefone = document.getElementById("telefone").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        const texto = `Olá, meu nome é ${nome}.%0A
Telefone: ${telefone}%0A
E-mail: ${email}%0A
Mensagem: ${mensagem}`;

        const numeroWhatsApp = "5585986458733";

        const url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;

        window.open(url, "_blank");
    });
}

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if(pageYOffset >= sectionTop - 200){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if(link.getAttribute("href") === `#${current}`){

            link.classList.add("active-link");

        }

    });

});

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    if(window.scrollY > 500){
        backToTop.classList.add("show");
    }else{
        backToTop.classList.remove("show");
    }
});


const counters = document.querySelectorAll(".counter");

function startCounters(){
    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const speed = target / 80;

        function updateCounter(){
            count += speed;

            if(count < target){
                counter.innerText = "+" + Math.ceil(count).toLocaleString("pt-BR");
                requestAnimationFrame(updateCounter);
            }else{
                counter.innerText = "+" + target.toLocaleString("pt-BR");
            }
        }

        updateCounter();
    });
}

let counterStarted = false;

window.addEventListener("scroll", () => {
    const numerosSection = document.querySelector(".numeros-section");

    if(numerosSection && !counterStarted){
        const sectionTop = numerosSection.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){
            startCounters();
            counterStarted = true;
        }
    }
});