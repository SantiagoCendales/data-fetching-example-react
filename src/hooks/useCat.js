import { useEffect, useState } from 'react'
import { getCatFact } from '../services/facts'

export const useCat = () => {
  const [fact, setFact] = useState(null)

  useEffect(() => {
    // const getFact = async () => {
    //   const catFactResp = await getCatFact()
    //   setFact(catFactResp)
    // }
    // getFact() <====== Código con async await
    getCatFact().then((data) => setFact(data))
  }, [])

  const getNewFact = async () => {
    const newFact = await getCatFact()
    setFact(newFact)
  }
  return {
    fact,
    getNewFact
  }
}
