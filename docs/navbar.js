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


/*function OnScrollWindow() {
  if (document.body.scrollTop > 570 || document.documentElement.scrollTop > 570) {
var elements = document.getElementsByClassName("navbar-menu__link");
elements[0].className = "navbar-menu__link--override";
} else {
  var elements = document.getElementsByClassName("navbar-menu__link--override");
  elements[0].className = "navbar-menu__link";
}

for (var i = 0; i < elements.length; i++){
    elements[i].className = "navbar-menu__link navbar-menu__link--override";
}
}*/