import './App.css'
import { useCatImg } from './hooks/useCatImg'
import { useFact } from './hooks/useFact'

export function App () {
  const { fact, refreshFact } = useFact()
  const { catImg } = useCatImg({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {
        fact
          ? (<p>{fact}</p>)
          : (<p>Loading...</p>)
      }
      {
        catImg
          ? (<img src={catImg} alt={`Image extracted using the three first words form ${fact}`} />)
          : (<p>Loading...</p>)
      }
    </main>
  )
}
