import { useEffect, useState } from 'react'

const CAT_RANDOM_FACT = 'https://catfact.ninja/fact'
const BASE_CAT_API_URL = 'https://cataas.com/'

export const App = () => {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_RANDOM_FACT)
      .then((data) => {
        console.log(data)
        data.json()
          .then((resp) => {
            const { fact } = resp
            setFact(fact)
          })
      })
  }, [])

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

  return (
    <>
      <main style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh'
      }}
      >
        <h1>App de fetching de data</h1>
        {fact && <p>{fact}</p>}
        {imageUrl && <img style={{ width: '350px' }} src={`${BASE_CAT_API_URL}${imageUrl}`} alt={`Cat image with three first words of ${fact}`} />}
      </main>
    </>
  )
}
