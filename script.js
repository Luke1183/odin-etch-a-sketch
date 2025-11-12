// Create a 16x16 grid here
function createGrid(n) {
  for (let i = 1; i <= n; i++) {
    const cell = "cell" + i;
    cell = document.createElement("div");
    cell.textContent = `${i}`;
    gridContainer.appendChild(cell);
  }
}
const gridContainer = document.querySelector("#grid-container");
let n = 16;
createGrid(n);
