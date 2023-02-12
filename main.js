const X_CLASS = 'x';
const O_CLASS = 'o';

const cellElements = document.querySelectorAll('[data-cell]');

let circleTurn;

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, {once:true})
})

function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? O_CLASS : X_CLASS;
    // Place a mark
    placeMark(cell, currentClass);

    // Check for win
    // Check for draw
    // Switch turn
}   

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}