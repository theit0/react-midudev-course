import { useEffect, useState } from 'react'

const CAT_PREFIX_IMG_URL = 'https://cataas.com'

export function useCatImg ({ fact }) {
  const [catImg, setCatImg] = useState('')
  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')
    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(response => response.json())
      .then(data => {
        const { _id } = data
        const url = `/cat/${_id}/says/${threeFirstWords}`
        setCatImg(url)
      })
  }, [fact])
  return { catImg: `${CAT_PREFIX_IMG_URL}${catImg}` }
}
