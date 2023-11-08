const canvas = document.querySelector(".canvas");
const inputSize = document.querySelector(".input-size");
inputSize.addEventListener("click", defineSize);
const defaultPixels = 16;
generatePixels(defaultPixels);

function generatePixels (pixelSize) {
  while (canvas.firstChild) {
    canvas.removeChild(canvas.lastChild);
  }
  canvas.style.setProperty("--pixels", pixelSize)
  for (let i = 0; i < pixelSize**2; i++) {
    const pixel = document.createElement("div");
    pixel.addEventListener("mouseenter", e => pixel.style.backgroundColor = "black");
    canvas.appendChild(pixel);
  }
}

function defineSize (event) {
  const pixelSize = prompt("How many pixels wide do you want the canvas to be?");
  if (Number.isInteger(+pixelSize) && +pixelSize >= 16 && +pixelSize <= 100) {
    generatePixels(+pixelSize)
  }
  else {
    alert("invalid input, please try again.")
  }
}