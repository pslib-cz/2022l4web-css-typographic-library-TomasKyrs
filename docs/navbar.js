window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "4px 2px";
    document.getElementById("navbar").style.backgroundColor = "#376847";
  } else {
    document.getElementById("navbar").style.padding = "10px 5px";
    document.getElementById("navbar").style.backgroundColor = "white";
  }
}