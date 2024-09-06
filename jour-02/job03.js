//TITLE : a garder une fois merge sur pre-dev
// function myDisplayText() {
//   // ajouter en live le texte inscrit dans l'input
//   document.getElementById("input-text").addEventListener("input", function () {
//     document.getElementById("text-displayer").innerText =
//       document.getElementById("input-text").value;
//   });

//   document.getElementById("turn-text-bold").addEventListener("click", function () {
//     document.getElementById("text-displayer").style.fontWeight = "bold";
//   });

//   document.getElementById("turn-text-italic").addEventListener("click", function () {
//     document.getElementById("text-displayer").style.fontStyle = "italic";
//   });

//   document.getElementById("clear-text").addEventListener("click", function () {
//     document.getElementById("text-displayer").style.fontWeight = "normal";
//     document.getElementById("text-displayer").style.fontStyle = "normal";
//   });
// }

// myDisplayText();

function myDisplayText() {
  // ajouter en live le texte inscrit dans l'input
  // c'est avec .addEventListener('input') que c'est possible --> c'est l'écouteur qui prend ce nom
  document.getElementById("input-text").addEventListener("input", function () {
    document.getElementById("text-displayer").innerText =
      //document.getElementById permet de pointer l'input
      //value permet de récupérer la valeur qu'il y a dans l'input
      document.getElementById("input-text").value;
  });

  // on déclare des variable mise par défaut à false
  let bold = false;
  let italic = false;

  //* on écoute ce qui se passe sur le bouton avec un clic
  document.getElementById("turn-text-bold").addEventListener("click", function () {
    // la condition permet de faire un effet toggle
    // on appelle simplement la variable au debut de la condition
    if (bold) {
      document.getElementById("text-displayer").style.fontWeight = "normal";
      // et on la met à jour
      bold = false;
    } else {
      document.getElementById("text-displayer").style.fontWeight = "bold";
      bold = true;
    }
  });

  document.getElementById("turn-text-italic").addEventListener("click", function () {
    if (italic) {
      document.getElementById("text-displayer").style.fontStyle = "normal";
      bold = false;
    } else {
      document.getElementById("text-displayer").style.fontStyle = "italic";
      bold = true;
    }
  });

  document.getElementById("clear-text").addEventListener("click", function () {
    document.getElementById("text-displayer").style.fontWeight = "normal";
    document.getElementById("text-displayer").style.fontStyle = "normal";
  });
}

//! APPERLER LA FONCTION POUR QUE CELA FONCTIONNE !!!!!
myDisplayText();
