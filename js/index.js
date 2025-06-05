
document.addEventListener("DOMContentLoaded", () => {
    const botaoMostrar = document.getElementById("mostrar");
    const divEmpresa = document.getElementById("empresa");
    const botaoFechar = document.getElementById("fechar")
    
    divEmpresa.style.display = "none";
    botaoMostrar.addEventListener("click", () => {
        if(divEmpresa.style.display == "block"){
            botaoMostrar.innerHTML = 'Ver mais'
            divEmpresa.style.display = "none";
        }
        else if(divEmpresa.style.display == "none"){
            botaoMostrar.innerHTML = 'fechar'
            divEmpresa.style.display = "block";
        }
    });


    botaoFechar.addEventListener('click', () =>{
        divEmpresa.style.display = "none";
    });
});

let slideIndex = 1;
let autoslide = setInterval(showNextSlide, 10000);
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function showNextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlides(slideIndex);
}


