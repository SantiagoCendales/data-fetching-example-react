import { useEffect, useState } from 'react'
import { getCatFact } from '../services/facts'

export const useCat = () => {
  const [fact, setFact] = useState(null)

  const getNewFact = async () => {
    const newFact = await getCatFact()
    setFact(newFact)
  }

  useEffect(() => {
    getNewFact()
  }, [])

  return {
    fact,
    getNewFact
  }
}
