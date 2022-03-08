const container = document.querySelector('.container');
const box = document.createElement('div');
box.classList.add('boxStyle');
function createGrid(num) {
    for (let i = 0; i < num; i++) {
        container.appendChild(box);
    }
}