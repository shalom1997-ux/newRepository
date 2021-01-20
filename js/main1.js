'use strict'
var gBoard ;
var gInterval;

function init() {
 gBoard =  boardSize()
    renderBoard(gBoard);
}


// function boardSize(size) {
//     var newMat = [];
//     for (var i = 0; i < size; i++) {
//         newMat[i] = [];
//         for (var j = 0; j < size; j++) {
//          newMat[i][j] = getRandomInt(1,4);
//         }
//     }  
//     return newMat;
// }

function renderBoard(board) {
    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < board[0].length; j++) {
            strHTML += `<td data-i="${i}" data-j="${j}"  ${board[i][j]}</td>`
        }
        strHTML += '</tr>'
    }
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
}

function resetTimer() {
    var elTimer = document.querySelector('.timer');
    elTimer.innerHTML = '0:000';
    gInterval = clearInterval(gInterval);
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); inclusive
  }