let size = 16;
const box = document.querySelector('#box');
const reset = document.querySelector('#reset');
const resize = document.querySelector('#resize');
const random = document.querySelector('#rainbow');
let gridBox;

function setGrid(size) {
    box.innerHTML = '';
    box.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    box.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        let div = document.createElement('div');
        div.classList.add('grid-box');
        box.appendChild(div);
    }
    gridBox = document.querySelectorAll('.grid-box');
    gridBox.forEach((gb) => {
        gb.addEventListener('mouseover', (e) => {
            gb.classList.add('active');
        });
    });
}
//add listener on button, when clicked it adds a random colour to the moused over background.
random.addEventListener('click', (e) => {
    gridBox.forEach((gb) => {
        gb.addEventListener('mouseover', (e) => {
            e.target.style.background = `rgb(${randomColour()}, ${randomColour()}, ${randomColour()})`;
        });
    });
})
//returns the current state to the original look
reset.addEventListener('click', (e) => {
    setGrid(size);
});
//resizes the grid to the specified new size
resize.addEventListener('click', (e) => {
    gridBox.forEach((gb) => {
        gb.classList.remove('active');
    });
    let newSize = prompt("Enter grid size please!");
    setGrid(newSize);
});
function randomColour() {
    return Math.floor(Math.random() * 255);
}
setGrid(size);