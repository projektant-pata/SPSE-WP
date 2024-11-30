const kolecko = document.querySelectorAll(".kolecko");
const obrazek = document.getElementById("obrazekNaZacatku")

kolecko[0].addEventListener("click", function () {
    document.documentElement.classList.toggle("uglyTheme");
    obrazek.src = "../img/tripyATiky/webJednoduchy.jpg"

    if (document.documentElement.classList[0] == "darkTheme" || document.documentElement.classList[0] == "secondaryTheme") {
        if (document.documentElement.classList[0] == "secondaryTheme") {
            document.documentElement.classList.toggle("secondaryTheme");
        }
        else {
            document.documentElement.classList.toggle("darkTheme");
        }


    }
});
kolecko[1].addEventListener("click", function () {
    document.documentElement.classList.toggle("darkTheme");
    obrazek.src = "../img/tripyATiky/webJednoduchy.jpg"

    if (document.documentElement.classList[0] == "uglyTheme" || document.documentElement.classList[0] == "secondaryTheme") {
        if (document.documentElement.classList[0] == "uglyTheme") {
            document.documentElement.classList.toggle("uglyTheme");
        }
        else {
            document.documentElement.classList.toggle("secondaryTheme");
        }


    }
});
kolecko[2].addEventListener("click", function () {
    document.documentElement.classList.toggle("secondaryTheme");
    obrazek.src = "../img/tripyATiky/webJednoduchySecondary.jpg"
    if (document.documentElement.classList[0] == "uglyTheme" || document.documentElement.classList[0] == "darkTheme") {
        if (document.documentElement.classList[0] == "uglyTheme") {
            document.documentElement.classList.toggle("uglyTheme");
        }
        else {
            document.documentElement.classList.toggle("darkTheme");

        }
    }
    if(!document.documentElement.classList[0] == "secondaryTheme"){
        obrazek.src = "../img/tripyATiky/webJednoduchy.jpg"

    }
});

window.addEventListener('scroll', function () {
    let windowHeight = window.innerHeight;
    let barvickyLeva = document.querySelectorAll(".barvickyLeva");
    
    barvickyLeva.forEach(function (karta, index) {
        let position = karta.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
    
        let delay = index * 0.5;
    
        if (position < windowHeight) {
            setTimeout(function () {
                karta.classList.add('animaceBarvaLeva');
                karta.style.opacity = "1"

            }, delay * 200);
        }
    });
    let barvickyPrava = document.querySelectorAll(".barvickyLeva");
    
    barvickyPrava.forEach(function (karta, index) {
        let position = karta.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
    
        let delay = index * 0.5;
    
        if (position < windowHeight) {
            setTimeout(function () {
                karta.classList.add('animaceBarvaLeva');
                karta.style.opacity = "1"
            }, delay * 200);
        }
    });
    let ctverce = document.querySelectorAll(".ctverec");
    let ctvercePosition = ctverce[0].getBoundingClientRect().top;
    
    if (ctvercePosition < windowHeight) {
        let zpozdeniMeziCtverci = 500;
        
        let nadpisCtverce = document.querySelector(".ctverecNadpisAnimace");
        nadpisCtverce.classList.add('animaceCtverec');
        nadpisCtverce.style.opacity = "1"
    
        nadpisCtverce.removeAttribute("animace");
    
        ctverce.forEach(function (ctverec, poradi) {
            setTimeout(function () {
                ctverec.classList.add('animaceCtverec');
                ctverec.style.opacity = "1"
            }, poradi * zpozdeniMeziCtverci);
        });
    }
});
let textH2 = document.querySelector("#hero h2");
let origoText = textH2.innerHTML;
let malyText = "Chcete <span>lepší</span> design?";
let cisla = document.getElementById("cisla")
let tlacitka = document.getElementById("tlacitka")
let druhyText = document.querySelector("h3")
let malyDruhyText = druhyText.innerHTML
let druhyMensiText = "<span>1. typ:</span> udělejte co nejhezčí úvodní snímek."

function checkWindowSize() {
    let windowWidth = window.innerWidth;

    // Podmínka pro zjištění, zdali je šířka okna menší než 1000px
    if (windowWidth < 1000) {
        textH2.innerHTML = malyText;
        druhyText.innerHTML = druhyMensiText
        cisla.remove()
    } else {
        textH2.innerHTML = origoText;
        druhyText.innerHTML = malyDruhyText
        tlacitka.after(cisla)
    }
}

window.addEventListener('resize', checkWindowSize);

// Zavolání funkce při načtení stránky, aby se získala počáteční hodnota
checkWindowSize();