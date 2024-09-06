function myDisplayText() {
  document.getElementById("input-text").addEventListener("input", function () {
    document.getElementById("text-displayer").innerText =
      document.getElementById("input-text").value;
  });

  let bold = false;
  let italic = false;

  document.getElementById("turn-text-bold").addEventListener("click", function () {
    if (bold) {
      document.getElementById("text-displayer").style.fontWeight = "normal";
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

myDisplayText();
