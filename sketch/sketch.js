// Variables
//
let currentMode = 'color'
let displayLines = false;

const colorModeButton = document.querySelector('#color-button');
const rainbowModeButton = document.querySelector('#rainbow-button');
const eraserButton = document.querySelector('#eraser-button');
const toggleLinesButton = document.querySelector('#toggle-lines-button');
const clearButton = document.querySelector('#clear-button');

const grid = document.querySelector("#grid");
const sliderRange = document.querySelector('#slider input');


// Functions
//
function deactivePreviousButton() {
    const currentActiveButton = document.querySelector(`#${currentMode}-button`);
    currentActiveButton.classList.remove('active');
}

function getRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256); 
    var b = Math.floor(Math.random() * 256); 
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
  
function setCellBackground(event){
    const colorPicker = document.querySelector('#colorpicker')
    const isLeftButtonPressed = event.buttons === 1;

    if ((event.type === 'click') || (event.type === 'mousemove' && isLeftButtonPressed)) {
        switch (currentMode) {
            case 'color':
                event.target.style.backgroundColor = colorPicker.value;
                break;
            case 'rainbow':
                event.target.style.backgroundColor = getRandomColor();
                break;
            case 'eraser':
                event.target.style.backgroundColor = 'var(--alt-white)'
                break;
            default:
                break;
        }
    }
}

function setGridDimensions(columnsNumber, rowsNumber){
    for (let i = 0; i < columnsNumber; i++) {

        // Create a column
        const newColumn = document.createElement('div');
        newColumn.classList.add('column');

        for (let j = 0; j < rowsNumber; j++) {
            
            // Create a cell
            const newCell = document.createElement('div');
            newCell.classList.add('cell');
            newCell.addEventListener('click', setCellBackground);
            newCell.addEventListener('mousemove', setCellBackground);

            // Add the cell to the column
            newColumn.appendChild(newCell);
        }

        // Add the column to the grid
        grid.appendChild(newColumn);
    }
}

function updateGridDimensions() {
    // Delete previous dimensions
    while (grid.hasChildNodes()){
        grid.firstChild.remove();
    }

    // Set new dimensions
    document.querySelector('#slider div').textContent = `${sliderRange.value} x ${sliderRange.value}`;
    setGridDimensions(sliderRange.value, sliderRange.value);
}


// Event Listeners
//
sliderRange.addEventListener('input', updateGridDimensions)

colorModeButton.addEventListener('click', (event) => {
    deactivePreviousButton();
    currentMode =  'color';
    colorModeButton.classList.add('active');
});

rainbowModeButton.addEventListener('click', (event) => {
    deactivePreviousButton();
    currentMode =  'rainbow';
    rainbowModeButton.classList.add('active');
});

eraserButton.addEventListener('click', (event) => {
    deactivePreviousButton();
    currentMode =  'eraser';
    eraserButton.classList.add('active');
})

toggleLinesButton.addEventListener('click', (event) => {
    const gridCells = document.querySelectorAll('#grid .cell');

    gridCells.forEach(cell => {
        if (displayLines) {
            cell.classList.remove('line');
            
        } else {
            cell.classList.add('line');
        }
    }); 
    
    displayLines = !displayLines; 
})

clearButton.addEventListener('click', () => {
    const gridCells = document.querySelectorAll('#grid .cell');
    gridCells.forEach(cell => {
        cell.style.backgroundColor = 'var(--alt-white)';
    });
})


// Executions
//
setGridDimensions(16, 16);
