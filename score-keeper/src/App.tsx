import { useState } from 'react'
import './App.css'

function App() {
  const [playerOneScore, setPOneCount] = useState(0)
  const [playerTwoScore, setPTwoCount] = useState(0)

  return (
    <>
    <div className='flexbox'>
      <div className="score-btn">
        <button className='score-btn' onClick={() => setPOneCount((playerOneScore) => playerOneScore + 1)}>
          P1 count is {playerOneScore}
        </button>
        <button onClick={() => setPTwoCount((playerTwoScore) => playerTwoScore + 1)}>
          P2 count is {playerTwoScore}
        </button>
      </div>
    </div>
    </>
  )
}

export default App
