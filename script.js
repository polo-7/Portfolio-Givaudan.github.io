function afficherTexte() {
    document.getElementById("P").style.display = "block";
}

// Utiliser setTimeout pour appeler la fonction après 3000 millisecondes (3 secondes)
setTimeout(afficherTexte, 5000);

window.onscroll = function() {
    fixHeader();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function fixHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
}
