function navigationbar(clicked) {
  var navbar = document.getElementsByClassName("nav-links");

  for (i = 0; i < navbar.length; i++) {
    navbar[i].className = "nav-links ";
  }

  clicked.className += "active";
}
