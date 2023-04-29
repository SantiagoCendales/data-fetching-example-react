import { useEffect, useState } from 'react'
const CAT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const useCat = () => {
  const [fact, setFact] = useState(null)

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
  return {
    fact
  }
}
