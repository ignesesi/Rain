
function draw()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    for(let x = 0; x < golemina; x++) {
        for(let y = 0; y < golemina; y++) {
            let current = tablica[x][y];
            for(let i in colors) {
                if(colors[i].level > current) {
                    pole[x][y] = colors[i].level;
                    context.fillStyle = colors[i].color;
                    break;
                }
            }
            context.globalAlpha = 1;
            context.fillRect(x*razmerX, y*razmerY, razmerX, razmerY);
        }
    }
    
    for(let y = 0; y < n; y++) {
        for(let x = 0; x < n; x++) {
            if(risuvamBurq) {
                if(distance(x, y, burqX, burqY) <= razmerBurq) {
                    context.globalAlpha = 0.6;
                    context.fillStyle = "red";
                    context.fillRect(x*razmerX, y*razmerY,razmerX,razmerY);
                }
            }
            if(vali[x][y] > 0) {
                context.globalAlpha = waterDepth[convertToIndex(vali[x][y])];
                context.fillStyle = "#0000FF";
                context.fillRect(x*razmerX, y*razmerY,razmerX,razmerY);
            }
        }
    }
    
    requestAnimationFrame(draw);
}

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

