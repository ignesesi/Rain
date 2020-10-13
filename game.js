
window.addEventListener("mousedown", onMouseDown, false);
window.addEventListener("mouseup", onMouseUp, false);
window.addEventListener("mousemove", onMouseMove, false);
window.addEventListener("keyup", onKeyUp, false);

startDiamondSquare(0, 0, gridSize);
update();
draw();
