
let MaxDiamond=27, MaxSquare=23;

let colors = [ {color: "#1d00ff", level: 50},
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

let waterDepth = [0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.8];

function distance(x1,y1,x2,y2)
{
    return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
}
