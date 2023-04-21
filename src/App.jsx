import { useEffect, useState } from 'react'

const CAT_RANDOM_FACT = 'https://catfact.ninja/fact'
const BASE_CAT_API_URL = 'https://cataas.com/'

export const App = () => {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_RANDOM_FACT)
      .then((data) => {
        data.json()
          .then((resp) => {
            const { fact } = resp
            setFact(fact)
            const firstWord = fact.split(' ', 3).join(' ')
            fetch(`${BASE_CAT_API_URL}cat/says/${firstWord}?size=50&color=red&json=true`)
              .then(catImgResp => catImgResp.json()
                .then(img => {
                  console.log(img)
                  const { url } = img
                  setImageUrl(url)
                })
              )
          })
      })
  }, [])

  return (
    <>
      <h1>App de fetching de data</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${BASE_CAT_API_URL}${imageUrl}`} alt={`Cat image with three first words of ${fact}`} />}
    </>
  )
}
