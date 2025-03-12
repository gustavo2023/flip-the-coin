const coin = document.getElementById("coin-btn");
const randomBtn = document.getElementById("random-btn");
const resultSpan = document.querySelector(".flip-result");

const flipCoin = () => {
  // Add the flipping class to trigger the animation
  coin.classList.add("flipping");

  // Remove the flipping class after the animation ends
  setTimeout(() => {
    coin.classList.remove("flipping");

    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    resultSpan.textContent = result;

    coin.innerText = result === "Heads" ? "$" : "|";
  }, 1000); // Match the duration of the animation
};

coin.addEventListener("click", flipCoin);
randomBtn.addEventListener("click", flipCoin);
