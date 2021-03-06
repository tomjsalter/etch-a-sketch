const gridContainer = document.getElementById("grid-container");
const startBtn = document.querySelector(".start");
const clearBtn = document.querySelector(".clear");
const blackBtn = document.querySelector(".black");
const whiteBtn = document.querySelector(".white");
const randomBtn = document.querySelector(".random");
const percentBtn = document.querySelector(".percent");
let opacity = document.querySelector('[data-opacity="1"]');
let gridNum;

startBtn.addEventListener("click", () => {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  gridNum = prompt("Choose a number. Maximum 100");
  if (gridNum > 100 || gridNum < 0) {
    alert("Please enter a number between 1 and 100");
  } else {
    populateGrid();
  }
});

function populateGrid() {
  let totalNum = parseInt(gridNum);
  totalNum = totalNum * totalNum;
  gridContainer.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;
  for (let i = 0; i < totalNum; i++) {
    let gridItem = document.createElement("div");
    gridContainer.appendChild(gridItem);
  }
}

clearBtn.addEventListener("click", () => {
  for (let i = 0; i < gridContainer.children.length; i++) {
    const containerChild = gridContainer.children[i];
    containerChild.style.backgroundColor = "transparent";
  }
});

blackBtn.addEventListener("click", () => {
  for (let i = 0; i < gridContainer.children.length; i++) {
    const applyBlack = gridContainer.children[i];
    applyBlack.addEventListener("mouseenter", () => {
      applyBlack.style.backgroundColor = "black";
    });
  }
});

whiteBtn.addEventListener("click", () => {
  for (let i = 0; i < gridContainer.children.length; i++) {
    const applyWhite = gridContainer.children[i];
    applyWhite.addEventListener("mouseenter", () => {
      applyWhite.style.backgroundColor = "white";
    });
  }
});

randomBtn.addEventListener("click", () => {
  for (let i = 0; i < gridContainer.children.length; i++) {
    const applyRandom = gridContainer.children[i];
    applyRandom.addEventListener("mouseenter", () => {
      let red = Math.floor(Math.random() * 255);
      let green = Math.floor(Math.random() * 255);
      let blue = Math.floor(Math.random() * 255);
      applyRandom.style.backgroundColor = `rgb(${red},${green},${blue})`;
    })
  }
});

percentBtn.addEventListener("click", () => {
  for (let i = 0; i < gridContainer.children.length; i++) {
    const applyPercent = gridContainer.children[i];
    applyPercent.addEventListener("mouseenter", () => {
      applyPercent.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    });
  }
});