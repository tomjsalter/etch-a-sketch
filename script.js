const gridContainer = document.getElementById("grid-container");
let gridNum = "16";
gridContainer.style.border = "none";
gridContainer.style.display = "grid";
gridContainer.style.height = "700px";
gridContainer.style.width = "700px";
gridContainer.style.margin = "100px auto"
gridContainer.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`;
gridContainer.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`;
gridContainer.appendChild(document.createElement("div"));


function populateGrid() {
    let totalNum = parseInt(gridNum);
    totalNum = totalNum * totalNum;
    for (let i = 0; i < totalNum; i++) {
        gridContainer.appendChild(document.createElement("div"));
    }
}
populateGrid();