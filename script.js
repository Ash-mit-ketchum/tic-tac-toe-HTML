function handleCellClick(event) {
  var cell = event.target;
  if (cell.innerText === '') {
    cell.innerText = currentPlayer;
    if (checkWin()) {
      message.innerText = currentPlayer + ' wins!';
      cells.forEach(function(cell) {
        cell.removeEventListener('click', handleCellClick);
      });
      return;
    }
    if (checkTie()) {
      message.innerText = 'It\'s a tie!';
      return;
    }
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  }
}

function checkTie() {
  return Array.from(cells).every(function(cell) {
    return cell.innerText !== '';
  });
}