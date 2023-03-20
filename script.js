const templateSelect = document.getElementById("template-select");
const topText = document.getElementById("top-text");
const bottomText = document.getElementById("bottom-text");
const generateBtn = document.getElementById("generate-btn");
const memeContainer = document.querySelector(".meme-container");
const memeImg = memeContainer.querySelector("img");

fetch("https://api.memegen.link/templates")
  .then(response => response.json())
  .then(data => {
    data.forEach(template => {
      const option = document.createElement("option");
      option.value = template.id;
      option.textContent = template.name;
      templateSelect.appendChild(option);
    });
  })
  .catch(error => console.error(error));

generateBtn.addEventListener("click", function () {
  const selectedTemplateId = templateSelect.value;
  const memeUrl = `https://api.memegen.link/images/${selectedTemplateId}/${encodeURIComponent(topText.value)}/${encodeURIComponent(bottomText.value)}.png`;
  memeImg.src = memeUrl;
});
