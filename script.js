const gridContainer = document.getElementById("grid-container");
gridContainer.style.border = "none";
gridContainer.style.display = "grid";
gridContainer.style.height = "700px";
gridContainer.style.width = "700px";
gridContainer.style.margin = "100px auto"
gridContainer.style.gridTemplateColumns = "repeat(16, 1fr)";
gridContainer.style.gridTemplateRows = "repeat(16, 1fr)";
gridContainer.appendChild(document.createElement("div"));


function populateGrid() {

}