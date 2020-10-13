
//use strict;
const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) { setTimeout (callback, 1000 / 30); };
const canvas = document.getElementById("canvas-id");
/*
//TODO: fullscreen
const screenSizeX = window.innerWidth, screenSizeY = window.innerHeight;
canvas.width = screenSizeX;
canvas.height = screenSizeY;
*/
canvas.width = 514;
canvas.height = 514;
const context = canvas.getContext("2d");

const gridSize = 129, cellSizeX = 4, cellSizeY = 4;
const MaxDiamond=27, MaxSquare=23;

const directionX = [0, 1, 0, -1];
const directionY = [-1, 0, 1, 0];

const colors = [ {color: "#1d00ff", level: 50},
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

const waterAlpha = [0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.8];

//variants for the 4 corners of gridLevel
const cornersVariants = [[275, 275, 556, 556], [0, 275, 275, 556], [0, 275, 556, 556]];

function distance(x1,y1,x2,y2)
{
    return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
}

let gridLevel = [], gridColor = [], waterLevel = [];
let rainStartX = -1, rainStartY = -1, rainRadius = 0;
let isRainAnimating = false;

for(let x = 0; x < gridSize; x++) {
    gridLevel[x] = [];
    gridColor[x] = [];
    waterLevel[x] = [];
    for(let y = 0; y < gridSize; y++) {
        gridLevel[x][y] = -1;
        gridColor[x][y] = "#000";
        waterLevel[x][y] = 0;
    }
}


