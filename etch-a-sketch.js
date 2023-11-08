const canvas = document.querySelector(".canvas");
const inputSize = document.querySelector(".input-size");
inputSize.addEventListener("click", defineSize);
let colorMode = "normal"
const defaultPixels = 16;
generatePixels(defaultPixels);

function generatePixels (pixelSize) {
  while (canvas.firstChild) {
    canvas.removeChild(canvas.lastChild);
  }
  canvas.style.setProperty("--pixels", pixelSize)
  for (let i = 0; i < pixelSize**2; i++) {
    const pixel = document.createElement("div");
    pixel.setAttribute("class", "pixel");
    pixel.addEventListener("mouseenter", changePixelColor);
    canvas.appendChild(pixel);
  }

  function changePixelColor (event) {
    const currentPixel = event.currentTarget;
    if (colorMode === "normal") {
      currentPixel.style.setProperty("--red", 0)
      currentPixel.style.setProperty("--green", 0)
      currentPixel.style.setProperty("--blue", 0)
    }
    else if (colorMode === "rgb") {
      currentPixel.style.setProperty("--red", Math.floor(Math.random() * 255))
      currentPixel.style.setProperty("--green", Math.floor(Math.random() * 255))
      currentPixel.style.setProperty("--blue", Math.floor(Math.random() * 255))
    }
    else if (colorMode === "darken") {
      
    }
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