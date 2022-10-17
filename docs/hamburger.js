document.addEventListener("DOMContentLoaded", () => {
    let hamelmnts = document.querySelectorAll(".hamburger-zone");
    for (const btn of document.querySelectorAll(".hamburger-btn")) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            for (const element of hamelmnts) {
                element.classList.toggle("active");
            }  
        });
    }
});

function myFunction() {
    var x = document.querySelector(".navbar-menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function doSomethingElse() {
    var x = document.querySelector(".switch");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }