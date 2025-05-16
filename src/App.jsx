import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const minus1 = () => {
    setCount(count-1)
  }
  const minus10 = () => {
    setCount(count-10)
  }
  const plus1 = () => {
    setCount(count+1)
  }
  const plus10 = () => {
    setCount(count+10)
  }
  const reset = () => {
    setCount(0)
  }


  return (
    <>
      <div className="wrap">
        <h1>My Counter</h1>
        <p className='number'>{count}</p>
        <div className='btn'>
          <button type='button' onClick={minus10}>-10</button>
          <button type='button' onClick={minus1}>-1</button>
          <button type='button' className='reset' onClick={reset}>Reset</button>
          <button type='button' onClick={plus1}>+1</button>
          <button type='button' onClick={plus10}>+10</button>
        </div>
      </div>
    </>
  )
}

export default App
