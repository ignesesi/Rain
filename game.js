var requestAnimationFrame = window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (callback) { setTimeout (callback, 1000 / 30); };
var canvas = document.getElementById("canvas-id");
canvas.width = 514;
canvas.height = 514;
var context = canvas.getContext("2d");
var pole=[],n=129, vali=[];
var x,y,golemina=129,razmerX=4,razmerY=4;
var burqX, burqY, razmerBurq;
var  risuvamBurq=false;
var tablica=[],mishkaX, mishkaY; 
var posokaX=[0,1,0,-1];
var posokaY=[-1,0,1,0];;
for(x=0;x < golemina;x++){
    vali[x]=[];
    tablica[x]=[];
    pole[x]=[];
    for(y=0;y < golemina;y++){
        tablica[x][y] = -1;
        vali[x][y]=0;
    }
}

var varianti=[];//vuzmozni purvona4alni stoinosti na 4 ugula na tablicata
varianti[0]=[275,275,556,556];
varianti[1]=[0,275,275,556];
varianti[2]=[0,275,556,556];
var koi=Math.floor(Math.random()*3);//koi variant

var kolko=4;
var stoinost=[];//izbrani purvona4alni stoinosti na 4 ugula na tablicata
for(var i=0;i<4;i++){
    var index=Math.floor(Math.random()*kolko),copy;
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
var voda=[0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.8];
function kvo(v)
{
    if(v<10)
    return 0;
    if(v>=10 && v<20)
    return 1;
    if(v>=20 && v<40)
    return 2;
     if(v>=40 && v<60)
    return 3;
     if(v>=60 && v<80)
    return 4;
     if(v>=80 && v<100)
    return 5;
     if(v>=100 && v<130)
    return 6;
    return 7;
}
var MaxDiamond=27,MaxSquare=23;
diamondSquare(0,0,golemina);

function diamondSquare(x, y, size){  // DO NOT TOUCH
    var mid = (size-1) / 2;

    var c0 = tablica[x][y];
    var c1 = tablica[x][y+size-1];
    var c2 = tablica[x+size-1][y];
    var c3 = tablica[x+size-1][y+size-1];
    
    ///DIAMOND
    if(tablica[x+mid][y+mid] == -1) // Ne sme slojili diamond
    {
        var diamond = Math.floor(Math.random() * MaxDiamond - Math.random() * MaxDiamond);
        var sbor = c0 + c1 + c2 + c3;
        tablica[x+mid][y+mid] = Math.floor(sbor/4) + diamond;
    }
    
    ///SQUARE
    if(tablica[x][y+mid] == -1)
    {
        var square = Math.floor(Math.random() * MaxSquare - Math.random() * MaxSquare);
        var sbor = c0 + c1 + tablica[x+mid][y+mid];
        tablica[x][y+mid] = Math.floor(sbor/3) + square;
    }
    if(tablica[x+mid][y] == -1)
    {
        var square = Math.floor(Math.random() * MaxSquare - Math.random() * MaxSquare);
        var sbor = c0 + c2 + tablica[x+mid][y+mid];
        tablica[x+mid][y] = Math.floor(sbor/3) + square;
    }
    if(tablica[x+mid][y+size-1] == -1)
    {
        var square = Math.floor(Math.random() * MaxSquare - Math.random() * MaxSquare);
        var sbor = c1 + c3 + tablica[x+mid][y+mid];
        tablica[x+mid][y+size-1] = Math.floor(sbor/3) + square;
    }
    if(tablica[x+size-1][y+mid] == -1)
    {
        var square = Math.floor(Math.random() * MaxSquare - Math.random() * MaxSquare);
        var sbor = c2 + c3 + tablica[x+mid][y+mid];
        tablica[x+size-1][y+mid] = Math.floor(sbor/3) + square;
    }
    
    if(size >= 5)
    {
        diamondSquare(x, y, mid + 1);
        diamondSquare(x+mid, y, mid + 1);
        diamondSquare(x, y+mid, mid + 1);
        diamondSquare(x+mid, y+mid, mid+1);
    }
}

window.addEventListener("mousedown", function (args) {
    mishkaX=args.clientX-canvas.offsetLeft;
    mishkaY=args.clientY-canvas.offsetTop;//Slagame tezi redove za da razberem kude e deistvieto s mishkata
   // vali[Math.floor(mishkaX/10)][Math.floor(mishkaY/10)]++;
   // console.log( vali[Math.floor(mishkaX/10)][Math.floor(mishkaY/10)]);
    
        burqX=Math.floor(mishkaX/razmerX);
        burqY=Math.floor(mishkaY/razmerY);
        risuvamBurq=true;        
   // myY=mishkaY;
   // console.log(rzs(pole[Math.floor(mishkaX/10)][Math.floor(mishkaY/10)], oblastiX[izlizamOt[Math.floor(mishkaY/10)][Math.floor(mishkaY/10)]],oblastiY[izlizamOt[Math.floor(mishkaY/10)][Math.floor(mishkaY/10)]] ))
}, false);
window.addEventListener("mouseup", function (args) {
    mishkaX=args.clientX-canvas.offsetLeft;
    mishkaY=args.clientY-canvas.offsetTop;//Slagame tezi redove za da razberem kude e deistvieto s mishkata
   // vali[Math.floor(mishkaX/10)][Math.floor(mishkaY/10)]++;
   // console.log( vali[Math.floor(mishkaX/10)][Math.floor(mishkaY/10)]);
    if(risuvamBurq){
         for(y=0;y<n;y++)
         {
             for(x=0;x<n;x++)
             {
                 if(rzs(x,y,burqX, burqY)<=razmerBurq)
                 {
                     vali[x][y]+=10;
                 }
             }
         }
         risuvamBurq=false;
        }
         else{
         burqX=undefined;
         burqY=undefined;
         risuvamBurq=true;
         }
   // myY=mishkaY;
   // console.log(rzs(pole[Math.floor(mishkaX/10)][Math.floor(mishkaY/10)], oblastiX[izlizamOt[Math.floor(mishkaY/10)][Math.floor(mishkaY/10)]],oblastiY[izlizamOt[Math.floor(mishkaY/10)][Math.floor(mishkaY/10)]] ))
}, false);
window.addEventListener("mousemove", function (args) {
    mishkaX=args.clientX-canvas.offsetLeft;
    mishkaY=args.clientY-canvas.offsetTop;//Slagame tezi redove za da razberem kude e deistvieto s mishkata
   // vali[Math.floor(mishkaX/10)][Math.floor(mishkaY/10)]++;
  //  console.log( "v",vali[Math.floor(mishkaX/2)][Math.floor(mishkaY/2)]);
  //  console.log( "p",pole[Math.floor(mishkaX/2)][Math.floor(mishkaY/2)]);
    if(risuvamBurq)
    {
        razmerBurq=rzs(burqX, burqY,Math.floor(mishkaX/razmerX),Math.floor(mishkaY/razmerY));
    }
   // myY=mishkaY;
   // console.log(rzs(pole[Math.floor(mishkaX/10)][Math.floor(mishkaY/10)], oblastiX[izlizamOt[Math.floor(mishkaY/10)][Math.floor(mishkaY/10)]],oblastiY[izlizamOt[Math.floor(mishkaY/10)][Math.floor(mishkaY/10)]] ))
}, false);
function update() {
      for(y=0;y<n;y++)
    {
        for(x=0;x<n;x++)
        {
           // console.log(vali[x][y]);
            if(vali[x][y]>0)
            {
                vali[x][y]+=2;
                if(vali[x][y]>150)
                    vali[x][y]=150;
            }
            if(vali[x][y]>4) 
            {
                 for(h=0;h<4;h++)
                {
     
                    if( 
                        x+posokaX[h]>=0 && x+posokaX[h]<n &&
                        y+posokaY[h]>=0 && y+posokaY[h]<n )
                      //  pole[x+posokaX[h]][y+posokaY[h]]*40<=pole[x][y]+vali[x][y])
                        {
                           if( pole[x+posokaX[h]][y+posokaY[h]]==pole[x][y] ||
                               pole[x+posokaX[h]][y+posokaY[h]]<pole[x][y] ||
                              pole[x+posokaX[h]][y+posokaY[h]]<=pole[x][y]+vali[x][y])
                           {
                            vali[x][y]-=0.8;
                            vali[x+posokaX[h]][y+posokaY[h]]+=0.8;
                           }
                           
                        }
                }
            }
        }
    }

	setTimeout(update, 100);
}
function rzs(x1,y1,x2,y2)
{
    return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
}
window.addEventListener("keyup", function (args) {     
    if(args.keyCode==32 )
    {
        if(risuvamBurq){
         for(y=0;y<n;y++)
         {
             for(x=0;x<n;x++)
             {
                 if(rzs(x,y,burqX, burqY)<=razmerBurq)
                 {
                     vali[x][y]+=10;
                 }
             }
         }
         risuvamBurq=false;
        }
         else{
         burqX=undefined;
         burqY=undefined;
         risuvamBurq=true;
         }
    }
}, false);
var colors = [ {color: "#1d00ff", level: 50},
               {color: "#006cff", level: 100},
              {color: "#009dff", level: 150},
               {color: "#00e2ff", level: 200},
              {color: "#ff0", level: 250},
              {color: "#0f0", level: 300},
              {color: "#00cb00", level: 350},
               {color: "#009f00", level: 400},
               {color: "#993", level: 450},
              {color: "#996633", level: 500},
              {color: "#5a2d00", level: 550}];

function draw() {
	context.clearRect(0, 0,canvas.width, canvas.height);
    
    for(x=0;x<golemina;x++){
        for(y=0;y<golemina;y++){
            var current = tablica[x][y];
            for(var i in colors)
            {
                if(colors[i].level > current)
                {
                    pole[x][y]=colors[i].level;
                    context.fillStyle = colors[i].color;
                    break;
                }
            }
            context.globalAlpha=1;
            context.fillRect(x*razmerX,y*razmerY,razmerX,razmerY);
        }
    }
     for(y=0;y<n;y++)
        {
            for(x=0;x<n;x++)
            {
                if(risuvamBurq)
                 {
                    if(rzs(x,y,burqX, burqY)<=razmerBurq)
                    {
                        context.globalAlpha=0.6;
                        context.fillStyle="red";
                        context.fillRect(x*razmerX, y*razmerY,razmerX,razmerY);
                    }
                 }
               if(vali[x][y]>0)
               {
                  
                  context.globalAlpha=voda[kvo(vali[x][y])];
                  context.fillStyle="#0000FF";
                context.fillRect(x*razmerX, y*razmerY,razmerX,razmerY);
               }
            }
        }
	requestAnimationFrame(draw);
}
update();
draw();
