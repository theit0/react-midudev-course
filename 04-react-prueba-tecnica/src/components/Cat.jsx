import { useCatImg } from '../hooks/useCatImg'
import { useFact } from '../hooks/useFact'

export function Cat () {
  const { fact } = useFact()
  const { catImg } = useCatImg({ fact })
  return (
    <>
      {
        fact
          ? (<img src={catImg} alt='cat' />)
          : (<p>Loading...</p>)
      }
    </>
  )
}
