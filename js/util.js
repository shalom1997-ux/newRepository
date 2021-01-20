
'use strict'
function createMat(ROWS, COLS) {
    var mat = []
    for (var i = 0; i < ROWS; i++) {
        var row = []
        for (var j = 0; j < COLS; j++) {
            row.push('')
        }
        mat.push(row)
    }
    return mat
}
function timer() {
    startTime = Date.now();
    gInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        document.querySelector(".timer").innerHTML = (elapsedTime / 1000).toFixed(3);
    }, 100);
}