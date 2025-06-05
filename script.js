function zmienKolor() {
  const losowyKolor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = losowyKolor;
}

function pokazPanda() {
  document.getElementById("panda").innerHTML =
    '<img src="./images/panda.jpg" width="200">';
}

function pokazGeparda() {
  document.getElementById("gepard").innerHTML =
    '<img src="./images/gepard.jpg" width="200">';
}
function pokazTygrysa() {
  document.getElementById("tygrys").innerHTML =
    '<img src="./images/tygrys.jpg" width="200">';
}
function pokazYT() {
  const ytFrame = document.getElementById("yt-frame");
  ytFrame.src = "https://www.youtube.com/embed/-bTpp8PQSog?autoplay=1"; // <-- podmień ID na inne jeśli chcesz
  document.getElementById("yt-wrapper").style.display = "block";
}

// Gra - Złap buźkę
let score = 0;
function startGame() {
  const gameArea = document.getElementById("game-area");
  const buzka = document.createElement("div");
  buzka.className = "buzka";
  buzka.textContent = "😀";
  const x = Math.random() * 260;
  const y = Math.random() * 260;
  buzka.style.left = x + "px";
  buzka.style.top = y + "px";
  buzka.onclick = function () {
    score++;
    document.getElementById("score").textContent = score;
    buzka.remove();
    startGame();
  };
  gameArea.innerHTML = "";
  gameArea.appendChild(buzka);
  setTimeout(() => {
    if (gameArea.contains(buzka)) {
      gameArea.innerHTML = "";
      startGame();
    }
  }, 1500);
}

window.onload = startGame;
