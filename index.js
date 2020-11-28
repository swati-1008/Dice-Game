document.querySelector("h1").onclick = function change() {
  var rand1 = Math.floor(Math.random() * 6 + 1);
  var file1 = "images/dice" + rand1 + ".png";
  document.querySelector(".img1").setAttribute("src", file1);

  var rand2 = Math.floor(Math.random() * 6 + 1);
  var file2 = "images/dice" + rand2 + ".png";
  document.querySelector(".img2").setAttribute("src", file2);

  if (rand1 > rand2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  }
  else if (rand2 > rand1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  document.querySelector(".foot").classList.remove("invisible");
}
