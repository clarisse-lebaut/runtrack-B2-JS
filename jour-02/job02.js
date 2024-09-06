//TITLE : une fonction pour compter les clics

//on déclare une fonction sans paramètres
function myAddCount() {
  // on déclare une varible qui a pour valeur un int à 0
  let count = 0;
  // on sélectionne un élément via son ID et on écoute ce qui se passe
  //? document --> on dit qu'on va aller chercher quelque chose dans le docuement
  //? .getElementbyId('add-count-bt') --> et on récupère ce quelque chose par son ID, en notant le nom de l'id du DOM
  //? .addEventListener --> on appelle l'écouteur d'évenement
  //? ('click', ) --> on dit qu'il faut écouter l'évèenement du click
  //? function() { ... }) --> et on démarre la fonction d'écoute
  document.getElementById("add-count-btn").addEventListener("click", function () {
    // on sélectionne un élément via son ID et on ajoute quelque chose
    //? document --> on dit qu'on va aller chercher quelque chose dans le docuement
    //? .getElementbyId('count-displayer') --> et on récupère ce quelque chose par son ID, en notant le nom de l'id du DOM
    //? .innertText --> on souhaite que l'élément selectionne est du texte ajouter
    //? = ++count; --> et que ce texte ajouter va incrémenter la variable déclaré en haut de la fonction
    //* il y a une différence entre count++ et ++count :
    /**
     * + count++ : avant l'incrémentation
     * La valeur utilisée pour mettre à jour l'affichage est la valeur actuelle.
     * + ++count : après l'incrémentation
     * La valeur utilisée pour mettre à jour l'affichage est la nouvelle valeur après un +1.
     */
    document.getElementById("count-displayer").innerText = ++count;
  });
}

//! ne pas oublier d'appeler la fonction pour que le tout marche correctement
myAddCount();
