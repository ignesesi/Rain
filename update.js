function update()
{
    for(let y = 0; y < gridSize; y++) {
        for(let x = 0; x < gridSize; x++) {

            if(waterLevel[x][y] > 0) {
                waterLevel[x][y] += 2;
                if(waterLevel[x][y] > 150)
                    waterLevel[x][y] = 150;
            }

            if(waterLevel[x][y]>4) {
                for(let h = 0; h < 4; h++) {
                    if(x + directionX[h] >= 0 && x + directionX[h] < gridSize && y + directionY[h] >= 0 && y + directionY[h] < gridSize) {
                        if( gridLevel[x+directionX[h]][y+directionY[h]] == gridLevel[x][y] || 
                                gridLevel[x+directionX[h]][y+directionY[h]] < gridLevel[x][y] || 
                                gridLevel[x+directionX[h]][y+directionY[h]] <= gridLevel[x][y] + waterLevel[x][y]) {

                            waterLevel[x][y] -= 0.8;
                            waterLevel[x+directionX[h]][y+directionY[h]] += 0.8;
                        }
                    }
                }
            }

        }
    }

    setTimeout(update, 100);
}
