var lengthh = document.querySelectorAll(".btn").length;
for (var i = 1; i < lengthh; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function() {
    var whichColor = this.innerHTML;
    colorChange(whichColor);
  });
}

function colorChange(key) {
  switch (key) {
    case "btn6":
      document.querySelector(".pic1").src="https://i.imgur.com/PTgQlim.png";
      break;
    case "btn2":
      document.querySelector(".pic1").src = "https://i.imgur.com/Mplj1YR.png";
      break;
    case "btn3":
      document.querySelector(".pic1").src = "https://i.imgur.com/Zygu7I3.png";
      break;
    case "btn4":
      document.querySelector(".pic1").src = "https://i.imgur.com/iOeUBV7.png";
      break;
    case "btn5":
      document.querySelector(".pic1").src = "https://i.imgur.com/xSIK4M8.png";
      break;
    default:
      console.log(henlo);
  }
}
