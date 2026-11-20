import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const name="Mason"
  const age=19
  const[count,setCount]=useState(0)
  const[text,setText]=useState("")
  const[tasks,setTasks]=useState([])
  function handleIncrease(){
  setCount(count+1)

}
  function handleDecrease(){
    setCount(count-1)
  }
  function Reset(){
    setCount(0)
  }
  function HandleIncrease(){
    setCount(count+5)
  }
  function handleTextChange(event){
    setText(event.target.value)
}
  function handleAddTask(){
    setTasks([...tasks,text])
     console.log([...tasks, text])
  }

   return (
    <>
    <p>My name is {name}</p>
    <p>I am {age} years old</p>
    <p>Count:{count}</p>
    <input value={text} onChange={handleTextChange} />
    <p>{text}</p>
    <button onClick={handleIncrease}>+1</button>
    <button onClick={handleDecrease}>-1</button>
    <button onClick={Reset}>reset</button>
    <button onClick={HandleIncrease}>+5</button>
    <button onClick={handleAddTask}>Add</button>
    </>
  )
}
 
export default App
