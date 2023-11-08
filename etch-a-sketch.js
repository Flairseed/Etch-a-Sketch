const canvas = document.querySelector(".canvas");

for (let i = 0; i <= 16; i++) {
  const row = document.createElement("div");
  for (let i = 0; i <= 16; i++) {
    const pixel = document.createElement("div");
    pixel.setAttribute("class", "canvas-pixel")
    row.appendChild(pixel)
  }
  canvas.appendChild(row);
}