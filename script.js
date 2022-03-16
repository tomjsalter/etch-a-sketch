const gridContainer = document.getElementById("grid-container");
let gridNum = "16";
gridContainer.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
gridContainer.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;

function populateGrid() {
  let totalNum = parseInt(gridNum);
  totalNum = totalNum * totalNum;
  for (let i = 0; i < totalNum; i++) {
    const gridItem = document.createElement("div");
    gridItem.addEventListener("mouseenter", () => {
      gridItem.classList.add("bgDiv");
    });
    gridContainer.appendChild(gridItem);
  }
}
populateGrid();
