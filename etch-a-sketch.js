const canvas = document.querySelector(".canvas");
const defaultPixels = 16;
generatePixels(defaultPixels);

function generatePixels (pixelSize) {
  while (canvas.firstChild) {
    canvas.removeChild(canvas.lastChild);
  }
  canvas.style.setProperty("--pixels", pixelSize)
  for (let i = 0; i < pixelSize**2; i++) {
    const pixel = document.createElement("div");
    pixel.setAttribute("class", "canvas-pixel");
    pixel.addEventListener("mouseenter", e => pixel.style.backgroundColor = "black");
    canvas.appendChild(pixel);
  }
}