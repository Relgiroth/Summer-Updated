const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';

function checkWinner() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]
  ];
  
  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
      cells[a].style.backgroundColor = 'lightgreen';
      cells[b].style.backgroundColor = 'lightgreen';
      cells[c].style.backgroundColor = 'lightgreen';
      return cells[a].textContent;
    }
  }
  
  if ([...cells].every(cell => cell.textContent !== '')) {
    return 'draw';
  }
  
  return null;
}

function handleClick() {
  if (this.textContent !== '') return;
  
  this.textContent = currentPlayer;
  const result = checkWinner();
  
  if (result === 'draw') {
    alert('It\'s a draw!');
  } else if (result) {
    alert(result + ' wins!');
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
