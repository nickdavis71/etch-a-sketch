const gridContainer = document.querySelector('#grid-container');
const sliderContainer = document.querySelector('#slider-container');
const gridSize = document.querySelector('#grid-size');
const slider = document.querySelector('#myRange');

const root = document.querySelector(':root');
const rootStyles = getComputedStyle(root);
root.style.setProperty('--rows',getSliderValue());
root.style.setProperty('--columns',getSliderValue());

slider.addEventListener('click', () => {createGridSquares(getSliderValue(), getSliderValue())});

createGridSquares(16,16);
function createGridSquares (rows, columns) {
    for(let i = 0; i < (rows*columns); i++) {
        const gridSquares = document.createElement('div');
        gridSquares.classList.toggle('blank-square');
        gridContainer.appendChild(gridSquares);
    }
}


const gridSquares = document.querySelectorAll('.blank-square');

gridSquares.forEach((square) => equipEventListeners(square));

function colorSquare (square) {
    square.classList.remove('blank-square');
    square.classList.add('black-square');
}

function equipEventListeners (square) {
    square.addEventListener('mousedown', () => colorSquare)
    square.addEventListener('mouseover', (e) => {
        if (e.buttons === 1) colorSquare(square);
    })
}

function getSliderValue () {
    const slider = document.querySelector('#myRange');
    let sliderValue = slider.value;
    gridSize.textContent = `${sliderValue} x ${sliderValue}`;
    return sliderValue;
}

