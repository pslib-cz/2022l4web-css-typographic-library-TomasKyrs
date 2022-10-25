window.onscroll = function() {
  scrollFunction();
  //OnScrollWindow();
};

function scrollFunction() {
  if (document.body.scrollTop > 580 || document.documentElement.scrollTop > 580) {
    document.getElementById("navbar").style.padding = "4px 2px";
    document.getElementById("navbar").classList.add('sticky');
  } else {
    document.getElementById("navbar").style.padding = "10px 5px";
    document.getElementById("navbar").classList.remove('sticky');
  }
}