function mySearchButton(form) {
  const studentData = new FormData(form);

  fetch("request.php", {
    method: "POST",
    body: studentData,
  })
    .then((response) => response.json())
    .then((data) => {
      const resultContainer = document.getElementById("result-container");

      if (data.status === "success") {
        resultContainer.innerHTML = `
          <h3>Résultats de la recherche :</h3>
          <table border="1">
            <thead>
                <th>Nom & Prénom</th>
                <th>Grade</th>
                <th>Email</th>
                <th>Date de naissance</th>
                <th>Genre</th>
            </thead>
            <tbody>
              <td>${data.message.fullname}</td>
              <td>${data.message.grade}</td>
              <td>${data.message.email}</td>
              <td>${data.message.birthdate}</td>
              <td>${data.message.gender}</td>
            </tbody>
          </table>
        `;
      } else {
        resultContainer.innerHTML = `<p>${data.message}</p>`;
      }
    })
    .catch((error) => {
      console.error("Error: ", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    });
}

document.getElementById("form-search-student").addEventListener("submit", function (event) {
  event.preventDefault();
  mySearchButton(this);
});
