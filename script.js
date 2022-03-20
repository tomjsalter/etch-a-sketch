const gridContainer = document.getElementById("grid-container");
const startBtn = document.querySelector(".start");
const clearBtn = document.querySelector(".clear");
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
    let gridItem = document.createElement("div");
    gridItem.addEventListener("mouseenter", () => {
    gridItem.style.backgroundColor = "black";
    });
    gridContainer.appendChild(gridItem);
  }
}

startBtn.addEventListener('click', () => {
  gridNum = prompt("Choose a number. Maximum 100");
  populateGrid();
});

clearBtn.addEventListener('click', () => {
  for (let i = 0; i < gridContainer.children.length; i++) {
    const containerChild = gridContainer.children[i];
    containerChild.style.backgroundColor = "transparent";
  }
});

blackBtn.addEventListener('click', () => {
  for (let i = 0; i < gridContainer.children.length; i++) {
    const applyBlack = gridContainer.children[i];
    applyBlack.addEventListener("mouseenter", () => {
      applyBlack.style.backgroundColor = "black";
    })
  }
});