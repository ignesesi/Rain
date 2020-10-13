
function onKeyUp(args)
{     
    if(args.keyCode == 32) {
        if(isRainAnimating) {
            for(let y = 0; y < gridSize; y++) {
                for(let x = 0; x < gridSize; x++) {
                    if(distance(x, y, rainStartX, rainStartY) <= rainRadius) {
                        waterLevel[x][y] += 10;
                    }
                }
            }
            isRainAnimating = false;
        } else {
            rainStartX = undefined;
            rainStartY = undefined;
            isRainAnimating = true;
        }
    }
}

function onMouseMove(args)
{
    let mouseX = args.clientX - canvas.offsetLeft;
    let mouseY = args.clientY - canvas.offsetTop;
    if(isRainAnimating) {
        rainRadius = distance(rainStartX, rainStartY, Math.floor(mouseX/cellSizeX), Math.floor(mouseY/cellSizeY));
    }
}

function onMouseUp(args)
{
    let mouseX = args.clientX - canvas.offsetLeft;
    let mouseY = args.clientY - canvas.offsetTop;
    if(isRainAnimating) {
        for(let y = 0; y < gridSize; y++) {
            for(let x = 0; x < gridSize; x++) {
                if(distance(x, y, rainStartX, rainStartY) <= rainRadius) {
                    waterLevel[x][y] += 10;
                }
            }
        }
        isRainAnimating = false;
    } else {
        rainStartX = undefined;
        rainStartY = undefined;
        isRainAnimating = true;
    }
}

function onMouseDown(args)
{
    let mouseX = args.clientX - canvas.offsetLeft;
    let mouseY = args.clientY - canvas.offsetTop;
    rainStartX = Math.floor(mouseX/cellSizeX);
    rainStartY = Math.floor(mouseY/cellSizeY);
    isRainAnimating = true;
}
