function darkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

if (localStorage.getItem("theme") === "dark") {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      var element = document.body;
      element.classList.toggle("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      var element = document.body;
      element.classList.toggle("dark-mode");
      localStorage.setItem("theme", "light");
    }
  });
});