const canvas = document.querySelector(".canvas");

for (let i = 0; i <= 16; i++) {
  const row = document.createElement("div");
  for (let i = 0; i <= 16; i++) {
    const pixel = document.createElement("div");
    pixel.setAttribute("class", "canvas-pixel")
    pixel.addEventListener("mouseenter", e => pixel.style.backgroundColor = "black");
    row.appendChild(pixel)
  }
  canvas.appendChild(row);
}