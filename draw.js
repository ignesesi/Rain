
function draw()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.globalAlpha = 1;
    for(let x = 0; x < gridSize; x++) {
        for(let y = 0; y < gridSize; y++) {
            context.fillStyle = gridColor[x][y];
            context.fillRect(x*cellSizeX, y*cellSizeY, cellSizeX, cellSizeY);
        }
    }

    for(let y = 0; y < gridSize; y++) {
        for(let x = 0; x < gridSize; x++) {
            if(isRainAnimating) {
                if(distance(x, y, rainStartX, rainStartY) <= rainRadius) {
                    context.globalAlpha = 0.6;
                    context.fillStyle = "red";
                    context.fillRect(x*cellSizeX, y*cellSizeY,cellSizeX,cellSizeY);
                }
            }
            if(waterLevel[x][y] > 0) {
                context.globalAlpha = waterAlpha[convertToIndex(waterLevel[x][y])];
                context.fillStyle = "#0000FF";
                context.fillRect(x*cellSizeX, y*cellSizeY,cellSizeX,cellSizeY);
            }
        }
    }

    requestAnimationFrame(draw);

    function convertToIndex(v) {
        if(v<10) {
            return 0;
        }
        if(v>=10 && v<20) {
            return 1;
        }
        if(v>=20 && v<40) {
            return 2;
        }
        if(v>=40 && v<60) {
            return 3;
        }
        if(v>=60 && v<80) {
            return 4;
        }
        if(v>=80 && v<100) {
            return 5;
        }
        if(v>=100 && v<130) {
            return 6;
        }
        return 7;
    }
}



