let size = 16;
const box = document.querySelector('#box');
let gridBox;

function setGrid(size) {
    box.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    box.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < (size * size); i++) {
        let div = document.createElement('div');
        div.classList.add('grid-box');
        box.appendChild(div);
    }
    gridHover();
}

function gridHover() {
    gridBox = document.querySelectorAll('.grid-box');
    gridBox.forEach((gb) => {
        gb.addEventListener('mouseover', (e) => {
            gb.classList.add('active');
        });
    });
}
function reset() {
    gridBox.forEach((gb) => {
        gb.classList.remove('active');
    });
}
function resize() {
    reset();

}
setGrid(size);