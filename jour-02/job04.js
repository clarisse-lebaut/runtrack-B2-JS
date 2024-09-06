function myRegisterStudent(form) {
  // Il faut crée un objet qui va réunir toute les données du formulaire
  //? cela facilite l'envoie des données
  const studentData = new FormData(form);

  //on utilise fetch
  fetch("job04.php", {
    method: "POST",
    body: studentData,
  })
    .then((response) => response.json())
    .then((data) => {
      // Affiche le message retourné par PHP dans une alerte
      if (data.status === "success") {
        alert(data.message); // Affiche le message de succès
      } else {
        alert(data.message); // Affiche le message d'erreur
      }
    })
    .catch((error) => {
      console.error("Error: ", error);
      alert("An error occurated. Please try again.");
    });
}

document.getElementById("form-add-student").addEventListener("submit", function (event) {
  // récupére la fonction faite dans le fichier PHP
  event.preventDefault();
  myRegisterStudent(this);
});
