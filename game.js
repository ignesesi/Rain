
let pole = [], n = 129, vali = [];
let golemina = 129, razmerX = 4, razmerY = 4;
let burqX, burqY, razmerBurq;
let risuvamBurq = false;
let tablica = [], mouseX, mouseY; 
let directionX = [0, 1, 0, -1];
let directionY = [-1, 0, 1, 0];
for(let x = 0; x < golemina; x++)
{
    vali[x] = [];
    tablica[x] = [];
    pole[x] = [];
    for(let y = 0; y < golemina; y++)
    {
        tablica[x][y] = -1;
        vali[x][y] = 0;
    }
}

let varianti = [];//vuzmozni purvona4alni stoinosti na 4 ugula na tablicata
varianti[0] = [275, 275, 556, 556];
varianti[1] = [0, 275, 275, 556];
varianti[2] = [0, 275, 556, 556];
let koi = Math.floor(Math.random()*3);//koi variant

let kolko = 4;
let stoinost = [];//izbrani purvona4alni stoinosti na 4 ugula na tablicata
for(let i = 0; i < 4; i++)
{
    let index=Math.floor(Math.random()*kolko),copy;
    stoinost[i]=varianti[koi][index];
    copy=varianti[koi][kolko-1];
    varianti[koi][kolko-1]=varianti[koi][index]
    varianti[koi][index]=copy;
    kolko--;
}

tablica[0][0] = stoinost[0];
tablica[0][golemina-1] = stoinost[1];
tablica[golemina-1][0] = stoinost[2];
tablica[golemina-1][golemina-1] = stoinost[3];

diamondSquare(0, 0, golemina);

window.addEventListener("mousedown", onMouseDown, false);
window.addEventListener("mouseup", onMouseUp, false);
window.addEventListener("mousemove", onMouseMove, false);
window.addEventListener("keyup", onKeyUp, false);

update();
draw();
