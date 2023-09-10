if (localStorage.getItem("Classic (Space City)") === "on") {
    document.body.style.backgroundImage = "url('space-city.gif')";
    document.getElementById("Themes").value = "Classic (Space City)";
  } else if (localStorage.getItem("Ocean") === "on") {
    document.body.style.backgroundImage = "url('ocean.gif')";
    document.getElementById("Themes").value = "Ocean";
  } else if (localStorage.getItem("Dark") === "on") {
     document.body.style.backgroundImage = "url('circles.avif')";
    document.getElementById("Themes").value = "Dark";
  } else if (localStorage.getItem("Light") === "on") {
    document.body.style.backgroundImage = "url('white.jpeg')";
    document.getElementById("Themes").value = "Light";
  }

document.getElementById("Themes").onchange = function () {
  if (this.value === "Classic (Space City)") {
    localStorage.setItem("Classic", "on");
    localStorage.setItem("Ocean", "off");
    localStorage.setItem("Dark", "off");
    localStorage.setItem("Light", "off");
    document.body.style.backgroundImage = "url('space-city.gif')";
  } else if (this.value === "Ocean") {
    localStorage.setItem("Ocean", "on");
    localStorage.setItem("Classic", "off");
    localStorage.setItem("Dark", "off");
    localStorage.setItem("Light", "off");
    document.body.style.backgroundImage = "url('ocean.gif')";
  } else if (this.value === "Dark") {
    localStorage.setItem("Dark", "on");
    localStorage.setItem("Classic", "off");
    localStorage.setItem("Ocean", "off");
    localStorage.setItem("Light", "off");
    document.body.style.backgroundImage = "url('circles.avif')";
  } else if (this.value === "Light") {
    localStorage.setItem("Light", "on");
    localStorage.setItem("Dark", "off");
    localStorage.setItem("Classic", "off");
    localStorage.setItem("Ocean", "off");
    document.body.style.backgroundImage = "url('white.jpeg')";
  }
};
