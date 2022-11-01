const generateBtn = document.querySelector("#generate-grid");
const resetBtn = document.querySelector("#reset");
const gridContainer = document.querySelector("#grid-container");
gridContainer.style.backgroundColor = "black";
gridContainer.style.gap = "1px";
gridContainer.style.border = "solid 1px black";
gridContainer.style.gridTemplateColumns = "repeat(16, 1fr)";
gridContainer.style.gridTemplateRows = "repeat(16, 1fr)";

for (let i = 0; i < 256; i++) {
  const gridSquare = document.createElement("div");
  gridSquare.classList.add("white-bg");
  gridContainer.appendChild(gridSquare);
}

let gridItems = gridContainer.querySelectorAll("div");
gridItems = Array.from(gridItems);
gridItems.forEach((item) => {
  item.addEventListener("mouseover", function () {
    item.classList.remove("white-bg");
    item.classList.add("black-bg");
  });
});

function generateGrid() {
  let gridNum = prompt('Choose a number', 'Maximum of 100');
  if (gridNum > 100) {
    alert('Number choice must be below 100');
  } else {
    gridContainer.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;
  }
}

generateBtn.addEventListener("click", function(){
  generateGrid();
});

// calculate total number of divs needed for loop - gridNum * gridNum
// add for loop to append divs into new grid