const gridContainer = document.querySelector("#grid-container");
function setGrid() {
    for (let i = 0; i < 16; i++) {
        const gridItem = document.createElement("div");
        gridItem.style.backgroundColor = "black";
        gridContainer.appendChild(gridItem);
    }
}
