import { useState } from "react"

function App() {
  let [count,setCount]=useState(0);
  const addCount=()=>{
    if(count<20)setCount(count+1)
  }
  const minusCount=()=>{
    if(count>0)setCount(count-1)
  }
  return (
    <>
    <h1>Counter:{count}</h1>
    <button onClick={addCount}>Increase</button><br/>
    <button onClick={minusCount}>Decrease</button>


    </>
   
  )
}

export default App
