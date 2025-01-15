import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import { TURNS } from './constants'
import { checkWinner, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import { Board } from './components/Board'
import { Scoreboard } from './components/Scoreboard'
import { ResetButton } from "./components/ResetButton"
import { resetGameStorage, saveGameStorage } from './logic/storage'

function App () {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')

    if (boardFromStorage) return JSON.parse(boardFromStorage)

    return Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return JSON.parse(turnFromStorage) ?? TURNS.X
  })
  const [winner, setWinner] = useState(null)

  useEffect(() => {
    // guardar partida
    saveGameStorage({ board, turn })
  }, [turn, board])

  const updateBoard = (index) => {
    // no actualizmos si hay algo
    if (board[index] || winner) return

    // actualizar tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // cambiar turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) { // checkear si el juego se termino
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage()
  }

  
  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <ResetButton resetGame={resetGame}>Resetear juego</ResetButton>
      <Board board={board} updateBoard={updateBoard} />
      <Scoreboard turn={turn} />
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
