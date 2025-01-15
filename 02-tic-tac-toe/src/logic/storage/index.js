export function resetGameStorage () {
  window.localStorage.removeItem('turn')
  window.localStorage.removeItem('board')
}

export function saveGameStorage ({ board, turn }) {
  window.localStorage.setItem('board', JSON.stringify(board))
  window.localStorage.setItem('turn', JSON.stringify(turn))
}
