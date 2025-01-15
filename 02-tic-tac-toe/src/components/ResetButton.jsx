export function ResetButton ({ children, resetGame }) {
  return (
    <button onClick={resetGame}>{children}</button>
  )
}
