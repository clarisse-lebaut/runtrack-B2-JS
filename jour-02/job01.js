/**
 * TITLE : fonction pour changer le background
 * ? on a ajouter un paramètre pour juste mettre une couleur dans l'appel de la fonction
 * function myChangeBackgroundColor(color) {
 * _ ici on dit que le paramètre color est égale au changement de couleur
 * document.body.style.backgroundColor = color;
 * todo : on appel la focntion
 * myChangeBackgroundColor("yellow");
 * }
 * */

//TITLE : Changer la couleur du background
// on crée une fonction
function myChangeBackgroundColor() {
  // dans laquelle on va écouter un évnement qui se passe dans le DOM
  //? windows --> on selectionne l'element du DOM
  //? .addEvetnListener --> on utilise un écouteur d'évènement
  //? ("resize", --> on écoute un redimensionnement
  //? fucntion () {} --> c'est la fonction dans laquelle se passe l'écoute
  window.addEventListener("resize", function () {
    // condition selon des int pour la taille de l'écran
    //? inner.width permet de se concenter sur l'écran  et mesure la largeur de la fenêtre du navigateur
    if (innerWidth >= 1337) {
      document.body.style.backgroundColor = "#ffb703";
    } else if (innerWidth <= 1337 && innerWidth >= 505) {
      document.body.style.backgroundColor = "#d90429";
    } else if (innerWidth <= 504) {
      document.body.style.backgroundColor = "#003049";
    }
  });
}

//TODO : on appel la fonction
myChangeBackgroundColor();
