function onKeyUp(args)
{     
    if(args.keyCode == 32) {
        if(risuvamBurq) {
            for(let y = 0; y < n; y++) {
                for(let x = 0; x < n; x++) {
                    if(distance(x, y, burqX, burqY) <= razmerBurq) {
                        vali[x][y] += 10;
                    }
                }
            }
            risuvamBurq = false;
        } else {
            burqX = undefined;
            burqY = undefined;
            risuvamBurq = true;
        }
    }
}

function onMouseMove(args)
{
    let mouseX = args.clientX - canvas.offsetLeft;
    let mouseY = args.clientY - canvas.offsetTop;
    if(risuvamBurq) {
        razmerBurq = distance(burqX, burqY, Math.floor(mouseX/razmerX), Math.floor(mouseY/razmerY));
    }
}

function onMouseUp(args)
{
    let mouseX = args.clientX - canvas.offsetLeft;
    let mouseY = args.clientY - canvas.offsetTop;
    if(risuvamBurq) {
        for(let y = 0; y < n; y++) {
            for(let x = 0; x<n; x++) {
                if(distance(x, y, burqX, burqY) <= razmerBurq) {
                    vali[x][y] += 10;
                }
            }
        }
        risuvamBurq = false;
    } else {
        burqX = undefined;
        burqY = undefined;
        risuvamBurq = true;
    }
}

function onMouseDown(args)
{
    let mouseX = args.clientX - canvas.offsetLeft;
    let mouseY = args.clientY - canvas.offsetTop;
    burqX = Math.floor(mouseX/razmerX);
    burqY = Math.floor(mouseY/razmerY);
    risuvamBurq = true;
}
