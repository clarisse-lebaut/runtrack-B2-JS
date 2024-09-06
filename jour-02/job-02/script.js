function myAddCount() {
  document.getElementById("add-count-btn").addEventListener("click", function () {
    document.getElementById("count-displayer").innerText = ++count;
  });
}

myAddCount();
