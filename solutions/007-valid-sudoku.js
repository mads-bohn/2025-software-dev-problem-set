var isValidSudoku = function(board) {

    for (let row=0; row<9; row++) {
        let usedNums = new Set();
        for (let i=0; i<9; i++) {
            let val = board[row][i];
            if (val === ".") continue;
            if (usedNums.has(val)) return false;
            usedNums.add(val);
        }
    }

    for (let col=0; col<9; col++) {
        let usedNums = new Set();
        for (let i=0; i<9; i++) {
            let val = board[i][col];
            if (val === ".") continue;
            if (usedNums.has(val)) return false;
            usedNums.add(val);
        }
    }

    // iterate through boxes
    for (let box=0; box<9; box++) {
        let usedNums = new Set();
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let row = Math.floor(box / 3) * 3 + i;
                let col = (box % 3) * 3 + j;
                let val = board[row][col];
                if (val === ".") continue;
                if (usedNums.has(val)) return false;
                usedNums.add(val);
            }
        }
    }

    return true;
};