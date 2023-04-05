const gridContainer = document.querySelector('#grid-container');
const sliderContainer = document.querySelector('#slider-container');
const gridSize = document.querySelector('#grid-size');
const slider = document.querySelector('#myRange');
const root = document.querySelector(':root');
const blackButton = document.querySelector('#black-button');
const rainbowButton = document.querySelector('#rainbow-button');
const clearButton = document.querySelector('#clear-button');

// Initializes default gird upon loading page.
createGridSquares(16,16);
equipEventListeners();

let rainbowButtonClicked = false;
let blackButtonClicked = false;

blackButton.addEventListener('click', () => {
    blackButtonClicked = true;
    rainbowButtonClicked = false;
})

rainbowButton.addEventListener('click', () => {
    rainbowButtonClicked = true;
    blackButtonClicked = false;
})

clearButton.addEventListener('click', () => clearSketch());

slider.addEventListener('click', () => {
    createGridSquares(getSliderValue(), getSliderValue());
    equipEventListeners();
    clearSketch();
})

function createGridSquares (rows, columns) {
    for (let i = 0; i < (rows*columns); i++) {
        const gridSquares = document.createElement('div');
        gridContainer.appendChild(gridSquares);
    }
    // Sets grid size variables needed for CSS Grid input
    root.style.setProperty('--rows', rows);
    root.style.setProperty('--columns', columns);
}

// Function only calls on the colorSquare function once the mousedown and
// mouseover events are triggered. 
function equipEventListeners () {
    const gridSquares = document.querySelectorAll('#grid-container div');
    gridSquares.forEach((square) => {
        square.addEventListener('mousedown', () => colorSquare);
        square.addEventListener('mouseover', (e) => {
            if (e.buttons === 1) colorSquare(square);
            })
    })
}

function colorSquare (square) {
    if (rainbowButtonClicked === true) {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        square.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    }
    else {
        square.style.backgroundColor = 'black';
    }
}

function getSliderValue () {
    const slider = document.querySelector('#myRange');
    let sliderValue = slider.value;
    gridSize.textContent = `${sliderValue} x ${sliderValue}`;
    return sliderValue;
}

function clearSketch () {
    const gridSquares = document.querySelectorAll('#grid-container div');
    gridSquares.forEach((square) => {
        square.style.backgroundColor = 'white';
    })   
}