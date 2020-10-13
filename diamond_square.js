
function startDiamondSquare(x, y, size) {

    const variantIndex = Math.floor(Math.random()*3); //choose random variant

    //choose initial values for the 4 corners of gridLevel
    let counter = 4;
    let initCornersValues = []; 
    for(let i = 0; i < 4; i++)
    {
        const index = Math.floor(Math.random()*counter);
        initCornersValues[i] = cornersVariants[variantIndex][index];
        const copy = cornersVariants[variantIndex][counter-1];
        cornersVariants[variantIndex][counter-1] = cornersVariants[variantIndex][index];
        cornersVariants[variantIndex][index] = copy;
        counter--;
    }

    gridLevel[0][0] = initCornersValues[0];
    gridLevel[0][gridSize-1] = initCornersValues[1];
    gridLevel[gridSize-1][0] = initCornersValues[2];
    gridLevel[gridSize-1][gridSize-1] = initCornersValues[3];

    (function diamondSquare(x, y, size){
        let mid = (size-1) / 2;

        let c0 = gridLevel[x][y];
        let c1 = gridLevel[x][y+size-1];
        let c2 = gridLevel[x+size-1][y];
        let c3 = gridLevel[x+size-1][y+size-1];

        ///DIAMOND
        if(gridLevel[x+mid][y+mid] == -1) // No diamond have been put
        {
            let diamond = Math.floor(Math.random() * MaxDiamond - Math.random() * MaxDiamond);
            let sum = c0 + c1 + c2 + c3;
            gridLevel[x+mid][y+mid] = Math.floor(sum/4) + diamond;
        }

        ///SQUARE
        if(gridLevel[x][y+mid] == -1)
        {
            let square = Math.floor(Math.random() * MaxSquare - Math.random() * MaxSquare);
            let sum = c0 + c1 + gridLevel[x+mid][y+mid];
            gridLevel[x][y+mid] = Math.floor(sum/3) + square;
        }
        if(gridLevel[x+mid][y] == -1)
        {
            let square = Math.floor(Math.random() * MaxSquare - Math.random() * MaxSquare);
            let sum = c0 + c2 + gridLevel[x+mid][y+mid];
            gridLevel[x+mid][y] = Math.floor(sum/3) + square;
        }
        if(gridLevel[x+mid][y+size-1] == -1)
        {
            let square = Math.floor(Math.random() * MaxSquare - Math.random() * MaxSquare);
            let sum = c1 + c3 + gridLevel[x+mid][y+mid];
            gridLevel[x+mid][y+size-1] = Math.floor(sum/3) + square;
        }
        if(gridLevel[x+size-1][y+mid] == -1)
        {
            let square = Math.floor(Math.random() * MaxSquare - Math.random() * MaxSquare);
            let sum = c2 + c3 + gridLevel[x+mid][y+mid];
            gridLevel[x+size-1][y+mid] = Math.floor(sum/3) + square;
        }

        if(size >= 5)
        {
            diamondSquare(x, y, mid + 1);
            diamondSquare(x+mid, y, mid + 1);
            diamondSquare(x, y+mid, mid + 1);
            diamondSquare(x+mid, y+mid, mid+1);
        }
    })(x, y, size);


    for(let x = 0; x < gridSize; x++) {
        for(let y = 0; y < gridSize; y++) {
            for(let i in colors) {
                if(colors[i].level > gridLevel[x][y]) {
                    gridLevel[x][y] = colors[i].level;
                    gridColor[x][y] = colors[i].color;
                    break;
                }
            }
        }
    }
}


