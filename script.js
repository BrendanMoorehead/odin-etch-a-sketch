const dimension = document.getElementById("dimension-input");
const boardCont = document.getElementById("board-cont");
const color = document.getElementById("color-input");

let selectedColor = 'black';
function updateBoard(dim) {

    boardCont.style.setProperty('grid-template-columns', `repeat(`+ dim +`, 1fr)`);

    //Remove all tiles;
    while (boardCont.firstChild){boardCont.removeChild(boardCont.lastChild);}

    for (let i = 0; i < dim*dim; i++) {
        let tile = document.createElement('div');
        tile.classList.add("shadow");

        tile.addEventListener("mouseover",(e) => darken(tile));

        boardCont.appendChild(tile);
        
    }
}

function darken(tile) {
    tile.style.backgroundColor = selectedColor;
}

dimension.addEventListener("change", (e) => updateBoard(dimension.value));
color.addEventListener("change",() => selectedColor = color.value);