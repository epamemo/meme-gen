const generateBtn = document.getElementById("generate-btn");
const topText = document.getElementById("top-text");
const bottomText = document.getElementById("bottom-text");
const memeContainer = document.querySelector(".meme-container");
const memeImg = memeContainer.querySelector("img");

generateBtn.addEventListener("click", function () {
  memeImg.src = `https://api.memegen.link/images/custom/${encodeURIComponent(
    topText.value
  )}/${encodeURIComponent(bottomText.value)}.png`;
});
