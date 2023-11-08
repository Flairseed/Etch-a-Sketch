const canvas = document.querySelector(".canvas");
let pixels = 16

for (let i = 0; i < pixels**2; i++) {
  const pixel = document.createElement("div");
  pixel.setAttribute("class", "canvas-pixel");
  pixel.addEventListener("mouseenter", e => pixel.style.backgroundColor = "black");
  canvas.appendChild(pixel);
}