function toggleSnorlax() {
    const snorlax = document.getElementById("snorlax-image");
    snorlax.style.display = snorlax.style.display === "none" ? "block" : "none";
  }
  
  document.getElementById("darkModeToggle").addEventListener("change", function () {
    document.body.classList.toggle("dark");
  });
  
  function checkQuiz() {
    const answer = document.getElementById("quiz").value;
    const result = document.getElementById("quiz-result");
  
    if (answer === "pokeflute") {
      result.textContent = "✅ Correct! You need the Poké Flute!";
      result.style.color = "green";
    } else if (answer === "") {
      result.textContent = "Please select an answer.";
      result.style.color = "orange";
    } else {
      result.textContent = "❌ Oops! That's not it. Try again!";
      result.style.color = "red";
    }
  }
  
  function playMusic() {
    const music = document.getElementById("bg-music");
    music.play();
  }
  
  function stopMusic() {
    const music = document.getElementById("bg-music");
    music.pause();
    music.currentTime = 0;
  }
  
// GameBoy-style loading screen fadeout
window.addEventListener("click", () => {
    const screen = document.getElementById("loading-screen");
    if (screen) {
      screen.style.display = "none";
      document.getElementById("main-header").style.display = "block";
      document.getElementById("main-content").style.display = "block";
      document.getElementById("main-footer").style.display = "block";
    }
  }, { once: true });
    