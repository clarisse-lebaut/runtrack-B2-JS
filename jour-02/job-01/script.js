function myChangeBackgroundColor() {
  window.addEventListener("resize", function () {
    if (innerWidth >= 1337) {
      document.body.style.backgroundColor = "#ffb703";
    } else if (innerWidth <= 1337 && innerWidth >= 505) {
      document.body.style.backgroundColor = "#d90429";
    } else if (innerWidth <= 504) {
      document.body.style.backgroundColor = "#003049";
    }
  });
}

myChangeBackgroundColor();
