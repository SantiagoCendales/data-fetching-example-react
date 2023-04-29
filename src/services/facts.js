const CAT_RANDOM_FACT_URL = 'https://catfact.ninja/fact'

export const getCatFact = async () => {
  const resp = await fetch(CAT_RANDOM_FACT_URL)
  const { fact } = await resp.json()
  return fact
}
