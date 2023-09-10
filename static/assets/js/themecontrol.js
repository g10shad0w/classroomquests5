document.addEventListener("DOMContentLoaded", function (event) {
  if (localStorage.getItem("Classic (Space City)") === "on") {
    document.body.style.backgroundImage = "url('space-city.gif')";
    document.getElementById("Themes").value = "Classic (Space City)";
  } else if (localStorage.getItem("Ocean") === "on") {
    document.body.style.backgroundImage = "url('ocean.gif')";
    document.getElementById("Themes").value = "Ocean";
  } else if (localStorage.getItem("Midnight Blue") === "on") {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#ffffff";
    document.body.style.setProperty("--bg-c", "#000");
    document.getElementById("Themes").value = "Midnight Blue";
  } else if (localStorage.getItem("Light") === "on") {
    document.body.style.backgroundImage = "url('white.jpeg')";
    document.getElementById("Themes").value = "Light";
  }
});
