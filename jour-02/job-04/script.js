function myRegisterStudent(form) {
  const studentData = new FormData(form);

  fetch("request.php", {
    method: "POST",
    body: studentData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        alert(data.message);
      } else {
        alert(data.message);
      }
    })
    .catch((error) => {
      console.error("Error: ", error);
      alert("An error occurated. Please try again.");
    });
}

document.getElementById("form-add-student").addEventListener("submit", function (event) {
  event.preventDefault();
  myRegisterStudent(this);
});
