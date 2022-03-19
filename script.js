const gridContainer = document.getElementById("grid-container");
const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");
const blackBtn = document.querySelector(".black");
const whiteBtn = document.querySelector(".white");
const randomBtn = document.querySelector(".random");
const percentBtn = document.querySelector(".percent");
let gridNum;

function populateGrid() {
  let totalNum = parseInt(gridNum);
  totalNum = totalNum * totalNum;
  gridContainer.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;
  for (let i = 0; i < totalNum; i++) {
    const gridItem = document.createElement("div");
    gridItem.addEventListener("mouseenter", () => {
      gridItem.classList.add("bgDiv");
    });
    gridContainer.appendChild(gridItem);
  }
}

startBtn.addEventListener('click', () => {
  gridNum = prompt("Choose a number. Maximum 100");
  populateGrid();
});