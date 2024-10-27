import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [counter,setcounter] = useState(0);

const addvaluae = () => {
  
 setcounter(counter + 1);

}

const removevalue = () => {
 
  setcounter(counter - 1);
  
}

  return (
    <div className='main'>
     <h1 className='swagat'>Swagat</h1>
     <h2 className='counter'>Counter: {counter}</h2>

     <button className='btn1' onClick={addvaluae}>Add Value</button>
     <br></br>
     <button className='btn2' onClick={removevalue}>Remove Value</button>
    </div>
  )
}

export default App
