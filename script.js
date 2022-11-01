const generateBtn = document.querySelector("#generate-grid");
const resetBtn = document.querySelector("#reset");
const gridContainer = document.querySelector("#grid-container");
gridContainer.style.backgroundColor = "black";
gridContainer.style.gap = "1px";
gridContainer.style.border = "solid 1px black";

function startGrid() {
  gridContainer.style.gridTemplateColumns = "repeat(16, 1fr)";
  gridContainer.style.gridTemplateRows = "repeat(16, 1fr)";
  for (let i = 0; i < 256; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("white-bg");
    gridContainer.appendChild(gridSquare);
  }
  populateGrid();
}

function populateGrid() {
  let gridItems = gridContainer.querySelectorAll("div");
  gridItems = Array.from(gridItems);
  gridItems.forEach((item) => {
    item.addEventListener("mouseover", function () {
      item.classList.remove("white-bg");
      item.classList.add("black-bg");
    });
  });
}

function generateGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  let gridNum = prompt("Choose a number", "Maximum of 100");
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

generateBtn.addEventListener("click", function () {
  generateGrid();
});

startGrid();
