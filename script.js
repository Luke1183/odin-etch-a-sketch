// Create a 16x16 grid here
function removeGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

function createGrid(n) {
  for (let i = 1; i <= n; i++) {
    let cell = "cell" + i;
    cell = document.createElement("div");
    cell.textContent = `${i}`;
    gridContainer.appendChild(cell);
  }
}

const gridSizeButton = document.querySelector("#grid-size");
gridSizeButton.addEventListener("click", () => {
  let userInput = Number(prompt("Enter a number between 16 and 100:"));
  let errorMessage = "";

  if (Number.isInteger(userInput)) {
    if (userInput > 15 && userInput < 101) {
      n = userInput;
      createGrid(n);
    } else {
      removeGrid();
      errorMessage = "Number not within range";
    }
  } else {
    removeGrid();
    errorMessage = "Must enter a number";
  }
  if (errorMessage === "") {
    removeGrid();
    createGrid(n);
  } else {
    errorMessageText = document.createElement("div");
    errorMessageText.textContent = errorMessage;
    gridContainer.appendChild(errorMessageText);
  }
});

let errorMessage = "";
let n = 16;
const gridContainer = document.querySelector("#grid-container");
createGrid(n);
