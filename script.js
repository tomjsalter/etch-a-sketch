const gridContainer = document.getElementById("grid-container");
const gridItem = document.createElement("div");
gridContainer.style.display = "grid";
gridContainer.style.height = "900px";
gridContainer.style.width = "900px";
gridContainer.style.gridTemplateColumns = "repeat(16, 1fr)";
gridContainer.style.gridTemplateRows = "repeat(16, 1fr)";
gridItem.classList.add("itemStyle");
gridContainer.appendChild(gridItem);
