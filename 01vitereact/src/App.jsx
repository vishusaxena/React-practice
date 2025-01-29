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
    <div className=" flex justify-center  center">

    <h1>Counter:{count}</h1>
    <button onClick={addCount} className="bg-black text-white p-1">Increase</button><br/>
    <button onClick={minusCount}>Decrease</button>


    </div >
   
  )
}

export default App
