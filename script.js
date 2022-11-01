const generateBtn = document.querySelector("#generate-grid");
const randomBtn = document.querySelector("#random-btn");
const shadingBtn = document.querySelector("#shading-btn");
const clearBtn = document.querySelector("#clear-btn");
const resetBtn = document.querySelector("#reset-btn");
const gridContainer = document.querySelector("#grid-container");
gridContainer.style.backgroundColor = "black";
gridContainer.style.gap = "1px";
gridContainer.style.border = "solid 1px black";

function startGrid() {
  resetGrid();
  gridContainer.style.gridTemplateColumns = "repeat(16, 1fr)";
  gridContainer.style.gridTemplateRows = "repeat(16, 1fr)";
  for (let i = 0; i < 256; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("white-bg");
    gridContainer.appendChild(gridSquare);
  }
  populateGrid();
}

function generateGrid() {
  resetGrid();
  let gridNum = prompt("Choose a number");
  let loopCount = gridNum * gridNum;
  if (gridNum > 100) {
    alert("Number choice must be below 100");
  } else {
    gridContainer.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;
    for (let i = 0; i < loopCount; i++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("white-bg");
      gridContainer.appendChild(gridSquare);
    }
    populateGrid();
  }
}

function populateGrid() {
  let gridItems = gridContainer.querySelectorAll("div");
  gridItems = Array.from(gridItems);
  gridItems.forEach((item) => {
    item.addEventListener("mouseover", function () {
      // if...else in populateGrid() function
      // check what #id value is associated with button clicked
      // apply classList depending on button (random color, shading)
      item.classList.remove("white-bg");
      item.classList.add("black-bg");
    });
  });
}


function resetGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

generateBtn.addEventListener("click", function () {
  generateGrid();
});

resetBtn.addEventListener("click", function() {
  startGrid();
});

startGrid();
