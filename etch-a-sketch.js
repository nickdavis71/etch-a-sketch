const gridContainer = document.querySelector('#grid-container');

function createGridSquares (rows, columns) {
    for(let i = 0; i < (rows*columns); i++) {
        const gridSquares = document.createElement('div');
        gridSquares.classList.toggle('blank-square');
        gridContainer.appendChild(gridSquares);
    }
}
createGridSquares(16,16);

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