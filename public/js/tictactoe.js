
document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const playerDisplay = document.querySelector('#player')
  
  const playerXWinDisplay = document.querySelector('#playerXwins');
  const playerOWinDisplay = document.querySelector('#playerOwins');

  var playerXWins = 0;
  var playerOWins = 0;
  
  var turns = 0;


  let currentPlayer = 'playerX'

  squares.forEach(square => {
    square.addEventListener('click', clickOutcome)
  })

  function clickOutcome(e) {
    const squareArray = Array.from(squares)
    const index = squareArray.indexOf(e.target)

    if(currentPlayer === 'playerX') {
        if (squares[index].classList.length === 0) {
            squares[index].classList.add('playerX')
            checkWin(currentPlayer);
            currentPlayer = 'playerO';
            turns++;

        }
    } else {
    if (squares[index].classList.length === 0) {
      squares[index].classList.add('playerO')
      checkWin(currentPlayer);
      currentPlayer = 'playerX';
      turns++;

    }
        }
        
        if (turns == 9) {
            draw();
        }
        console.log(turns);
        playerDisplay.innerHTML = currentPlayer

console.log(currentPlayer);
  }
  
  
  function checkWin(currentPlayer){
      selectedSquares = document.querySelectorAll('.'+currentPlayer);
      let cols = 3;
      let checkRow1 = 0;
      let checkRow2 = 0;
      let checkRow3 = 0;
      
      let checkRow4 = 0;
      let checkRow5 = 0;
      let checkRow6 = 0;
      
      let diaRow1 = 0;
      let diaRow2 = 0;
      
      let win0_ = ['1','2','3'] // [1,1,1,0,0,0,0,0,0]
      let win1_ = ['4','5','6'] // [0,0,0,1,1,1,0,0,0]
      let win2_ = ['7','8','9'] // [0,0,0,0,0,0,1,1,1]
      
      let win_0 = ['1','4','7'] // [1,0,0,1,0,0,1,0,0]
      let win_1 = ['2','5','8'] // [0,1,0,0,1,0,0,1,0]
      let win_2 = ['3','6','9'] // [0,0,1,0,0,1,0,0,1]
      
      let win00 = ['1','5','9'] // [1,0,0,0,1,0,0,0,1]
      let win11 = ['3','5','7'] // [0,0,1,0,1,0,1,0,0]
      
      
      selectedSquares.forEach(function (value, index) {
          if (win0_.includes(value.id)) {
              checkRow1++;
          }
          if (win1_.includes(value.id)) {
              console.log(checkRow2);

              checkRow2++;
          }
          if (win2_.includes(value.id)) {
              checkRow3++;
          }
          
          if (win_0.includes(value.id)) {
              checkRow4++;

          }
          if (win_1.includes(value.id)) {
              checkRow5++;

          }
          if (win_2.includes(value.id)) {
              checkRow6++;
          }
        
          if (win00.includes(value.id)) {
              diaRow1++;
          }
          if (win11.includes(value.id)) {
              diaRow2++;
          }
        });
        
        if (
            checkRow1 === cols ||
            checkRow2 === cols ||
            checkRow3 === cols ||
            
            checkRow4 === cols ||
            checkRow5 === cols ||
            checkRow6 === cols ||
            
            diaRow1 === cols ||
            diaRow2 === cols

        ) {
            turns = 0;
            var player0Blocks = document.querySelectorAll('.playerO');
            
            player0Blocks.forEach((value, index) => {
                value.classList.remove('playerO')
            });
            
            var playerXBlocks = document.querySelectorAll('.playerX');
            
            playerXBlocks.forEach((value, index) => {
                value.classList.remove('playerX')
            });
            
            
            if (currentPlayer === "playerX") {
                playerXWinDisplay.value++;

            }
            
            if (currentPlayer === "playerO") {
                playerOWinDisplay.value++;

            }
            turns = 0;

        }
  }

function draw(){
    var player0Blocks = document.querySelectorAll('.playerO');
    
    player0Blocks.forEach((value, index) => {
        value.classList.remove('playerO')
    });
    
    var playerXBlocks = document.querySelectorAll('.playerX');
    
    playerXBlocks.forEach((value, index) => {
        value.classList.remove('playerX')
    });
    turns = 0;
    
}


})
