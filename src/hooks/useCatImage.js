import { useEffect, useState } from 'react'
const BASE_CAT_API_URL = 'https://cataas.com/'

export const useCatImage = ({ fact }) => {
  const [image, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ', 3).join(' ')
    fetch(`${BASE_CAT_API_URL}cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(catImgResp => catImgResp.json()
        .then(img => {
          console.log(img)
          const { url } = img
          setImageUrl(url)
        })
      )
  }, [fact])
  return {
    image
  }
}
