const gameField = document.getElementById('container');
// const block = document.createElement('div');
// block.classList.add('cell');


// for(let i = 0; i < 200; i++){
// gameField.append(block.cloneNode(true))
// }

const arr = [];
for(let y = 0; y < 20; y++){
    arr.push([])
    for(let x = 0; x < 10; x++){
        arr[y].push(0)
    } 
}
arr[0][3] = 1;
arr[0][4] = 1;
arr[0][5] = 1;
arr[1][4] = 1;
console.log(arr)

function drawFigure(){
gameField.innerHTML = '';
for(let y = 0; y < arr.length; y++){
    for(let x = 0; x < arr[y].length; x++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        if(arr[y][x] === 1){
            cell.classList.add('figure');
        }
        container.append(cell);
    }
}
}

function moveDown(){
    for(let y = arr.length -1; y >=  0; y--){
        for(let x = 0; x < arr.length; x++){
            if(arr[y][x] === 1){
                arr[y + 1][x] = 1;
                arr[y][x] = 0;
                
            }
        }
    }
    drawFigure()
};

setInterval(() => {
    moveDown()
}, 1000);

function moveLeft(){
    for(let y = arr.length -1; y >=  0; y--){
        for(let x = 0; x < arr.length; x++){
            if(arr[y][x] === 1){
                arr[y][x - 1] = 1;
                arr[y][x] = 0;
            }
        }
    }
    drawFigure()
};

function moveRight(){
    for(let x = arr.length -1; x >=  0; x--){
        for(let y = 0; y < arr.length; y++){
            if(arr[y][x] === 1){
                arr[y][x + 1] = 1;
                arr[y][x] = 0;
            }
        }
    }
    drawFigure()
};








drawFigure()