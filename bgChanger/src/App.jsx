import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")
  
  return (
    <div className="w-full h-screen flex justify-center duration-1000" style={{backgroundColor:color}}>
      <div className="flex gap-4  fixed bottom-12 bg-white p-4 rounded-2xl">
        <button className='bg-red-900 text-white py-2 px-6 cursor-pointer rounded-3xl outline' onClick={()=>setColor('red')}>Red</button>
        <button className='bg-yellow-400 text-black py-2 px-6 rounded-3xl outline' onClick={()=>setColor('yellow')}>Yellow</button>
        <button className='bg-white text-black py-2 px-6 rounded-3xl outline' onClick={()=>setColor('white')}>White</button>
        <button className='bg-blue-900 text-white py-2 px-6 rounded-3xl outline' onClick={()=>setColor('blue')}>Blue</button>
        <button className='bg-black text-white py-2 px-6 rounded-3xl outline' onClick={()=>setColor('black')}>Black</button>
        <button className=' text-black py-2 px-6 rounded-3xl outline' onClick={()=>setColor('lavender')}style={{backgroundColor:"lavender"}}>Lavender</button>
      </div>
    </div>
  )
}

export default App
