import { useCat } from './hooks/useCat'
import { useCatImage } from './hooks/useCatImage'

const BASE_CAT_API_URL = 'https://cataas.com/'

export const App = () => {
  const { fact, getNewFact } = useCat()
  const { image } = useCatImage({ fact })

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
        <button onClick={getNewFact}>Nuevo dato</button>
        <h1>App de fetching de data</h1>
        {fact && <p>{fact}</p>}
        {image && <img style={{ width: '350px' }} src={`${BASE_CAT_API_URL}${image}`} alt={`Cat image with three first words of ${fact}`} />}
      </main>
    </>
  )
}
