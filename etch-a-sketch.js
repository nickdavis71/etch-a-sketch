const gridContainer = document.querySelector('#grid-container');
const sliderContainer = document.querySelector('#slider-container');
const gridSize = document.querySelector('#grid-size');
const slider = document.querySelector('#myRange');
const root = document.querySelector(':root');

createGridSquares(16,16);
equipEventListeners();


slider.addEventListener('click', () => {
    createGridSquares(getSliderValue(), getSliderValue());
    equipEventListeners();
})





function createGridSquares (rows, columns) {
    for (let i = 0; i < (rows*columns); i++) {
        const gridSquares = document.createElement('div');
        gridSquares.classList.add('blank-square');
        gridContainer.appendChild(gridSquares);
    }
    root.style.setProperty('--rows', rows);
    root.style.setProperty('--columns', columns);
}

function equipEventListeners () {
    const gridSquares = document.querySelectorAll('#grid-container div');
    gridSquares.forEach((square) => {
        square.classList.remove('black-square')
        square.addEventListener('mousedown', () => colorSquare);
        square.addEventListener('mouseover', (e) => {
            if (e.buttons === 1) colorSquare(square);
            })
    })
}

function colorSquare (square) {
    square.classList.remove('blank-square');
    square.classList.add('black-square');
}

function getSliderValue () {
    const slider = document.querySelector('#myRange');
    let sliderValue = slider.value;
    gridSize.textContent = `${sliderValue} x ${sliderValue}`;
    return sliderValue;
}

