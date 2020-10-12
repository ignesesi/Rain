
function diamondSquare(x, y, size){
    let mid = (size-1) / 2;

    let c0 = tablica[x][y];
    let c1 = tablica[x][y+size-1];
    let c2 = tablica[x+size-1][y];
    let c3 = tablica[x+size-1][y+size-1];

    ///DIAMOND
    if(tablica[x+mid][y+mid] == -1) // No diamond have been put
    {
        let diamond = Math.floor(Math.random() * MaxDiamond - Math.random() * MaxDiamond);
        let sum = c0 + c1 + c2 + c3;
        tablica[x+mid][y+mid] = Math.floor(sum/4) + diamond;
    }

    ///SQUARE
    if(tablica[x][y+mid] == -1)
    {
        let square = Math.floor(Math.random() * MaxSquare - Math.random() * MaxSquare);
        let sum = c0 + c1 + tablica[x+mid][y+mid];
        tablica[x][y+mid] = Math.floor(sum/3) + square;
    }
    if(tablica[x+mid][y] == -1)
    {
        let square = Math.floor(Math.random() * MaxSquare - Math.random() * MaxSquare);
        let sum = c0 + c2 + tablica[x+mid][y+mid];
        tablica[x+mid][y] = Math.floor(sum/3) + square;
    }
    if(tablica[x+mid][y+size-1] == -1)
    {
        let square = Math.floor(Math.random() * MaxSquare - Math.random() * MaxSquare);
        let sum = c1 + c3 + tablica[x+mid][y+mid];
        tablica[x+mid][y+size-1] = Math.floor(sum/3) + square;
    }
    if(tablica[x+size-1][y+mid] == -1)
    {
        let square = Math.floor(Math.random() * MaxSquare - Math.random() * MaxSquare);
        let sum = c2 + c3 + tablica[x+mid][y+mid];
        tablica[x+size-1][y+mid] = Math.floor(sum/3) + square;
    }

    if(size >= 5)
    {
        diamondSquare(x, y, mid + 1);
        diamondSquare(x+mid, y, mid + 1);
        diamondSquare(x, y+mid, mid + 1);
        diamondSquare(x+mid, y+mid, mid+1);
    }
}

