import { useEffect, useState } from 'react'

const CAT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const API_URL = `https://cataas.com/cat/says/${text}?size=50&color=red`

export const App = () => {
  const [fact, setFact] = useState()

  useEffect(() => {
    fetch(CAT_RANDOM_FACT)
      .then((data) => {
        data.json()
          .then((resp) => {
            setFact(resp.fact)
          })
      })
  }, [])

  return (
    <>
      <h1>App de fetching de data</h1>
      {fact && <p>{fact}</p>}
    </>
  )
}
