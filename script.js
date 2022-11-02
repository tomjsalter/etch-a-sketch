const generateBtn = document.querySelector("#generate-grid");
const resetBtn = document.querySelector("#reset-btn");
const removeBtn = document.querySelector("#remove-btn");
const gridContainer = document.querySelector("#grid-container");
const blackBtn = document.querySelector("#black-btn");
const randomBtn = document.querySelector("#random-btn");
gridContainer.style.gap = "1px";
gridContainer.style.border = "solid 1px black";

startGrid();

function startGrid() {
  resetGrid();
  gridContainer.style.gridTemplateColumns = "repeat(16, 1fr)";
  gridContainer.style.gridTemplateRows = "repeat(16, 1fr)";
  for (let i = 0; i < 256; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("white-bg");
    gridContainer.appendChild(gridSquare);
  }
  blackPixel();
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
    blackPixel();
  }
}

function blackPixel() {
  let gridItems = gridContainer.querySelectorAll("div");
  gridItems = Array.from(gridItems);
  gridItems.forEach((item) => {
    item.addEventListener("mouseover", function () {
      item.className = "";
      item.style.backgroundColor = "";
      item.classList.add("black-bg");
    });
  });
}

function removePixel() {
  let gridItems = gridContainer.querySelectorAll("div");
  gridItems = Array.from(gridItems);
  gridItems.forEach((item) => {
    item.addEventListener("mouseover", function () {
      item.className = "";
      item.style.backgroundColor = "";
      item.classList.add("white-bg");
    });
  });
}

function randomColorPixel() {
  let gridItems = gridContainer.querySelectorAll("div");
  gridItems = Array.from(gridItems);
  gridItems.forEach((item) => {
    item.addEventListener("mouseover", function () {
      item.className = "";
      item.style.backgroundColor = "";
      let rColor = Math.floor(Math.random() * 256);
      let gColor = Math.floor(Math.random() * 256);
      let bColor = Math.floor(Math.random() * 256);
      item.style.backgroundColor = `rgb(${rColor}, ${gColor}, ${bColor})`;
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

blackBtn.addEventListener("click", function() {
  blackPixel();
});

randomBtn.addEventListener("click", function() {
  randomColorPixel();
});

shadingBtn.addEventListener("click", function() {
  shadeBlack();
});

removeBtn.addEventListener("click", function() {
  removePixel();
});

resetBtn.addEventListener("click", function() {
  startGrid();
});
