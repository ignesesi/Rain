function update()
{
    for(let y=0;y<n;y++) {
        for(let x=0;x<n;x++) {
   
            if(vali[x][y] > 0) {
                vali[x][y] += 2;
                if(vali[x][y] > 150)
                    vali[x][y] = 150;
            }
            
            if(vali[x][y]>4) {
                for(let h = 0; h < 4; h++) {
                    if(x + directionX[h] >= 0 && x + directionX[h] < n && y + directionY[h] >= 0 && y + directionY[h] < n) {
                        if( pole[x+directionX[h]][y+directionY[h]] == pole[x][y] || 
                            pole[x+directionX[h]][y+directionY[h]] < pole[x][y] || 
                            pole[x+directionX[h]][y+directionY[h]] <= pole[x][y] + vali[x][y]) {
                            
                            vali[x][y] -= 0.8;
                            vali[x+directionX[h]][y+directionY[h]] += 0.8;
                        }
                    }
                }
            }
            
        }
    }
    
    setTimeout(update, 100);
}
