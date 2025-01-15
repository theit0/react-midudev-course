import { ResetButton } from './ResetButton'
import { Square } from './Square'

export function WinnerModal ({ winner, resetGame }) {
  if (winner === null) return null

  const winnerText = winner === false ? 'Empate' : 'Ganó: '

  return (
    <section className='winner'>
      <div>
        <h2>{winnerText}</h2>
        <header className='win'>
          {winner && <Square>{winner}</Square>}
        </header>
        <footer>
          <ResetButton resetGame={resetGame}>Resetear juego</ResetButton>
        </footer>
      </div>
    </section>
  )
}
