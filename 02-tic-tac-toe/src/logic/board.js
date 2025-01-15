import { WINNER_COMBOS } from '../constants.js'

export const checkWinner = (boardToCheck) => {
  // por cada combinacion ganadora
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a] // devuelve x u o
    }
  }
  // no hay ganador
  return null
}

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null)
}
