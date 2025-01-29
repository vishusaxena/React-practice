import { isValidElement } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react'


function App() {
        const [length,setLength]=useState(8);
        const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password,setPassword]=useState("");

  const passwordGenerator=useCallback(()=>{
       let pass="";
       let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
       if(includeNumbers)str+="01234567890";
       if(includeSymbols)str+="~!@#$56&*()";
       for (let i = 0; i < length; i++) {
        let char=Math.floor(Math.random()*str.length+1);
        pass+=str.charAt(char);
        
       }
       setPassword(pass);
  },[length,includeNumbers,includeSymbols]);

  const passwordRef=useRef(null);

 const copytoClipboard=useCallback(()=>{
      window.navigator.clipboard.writeText(password);
 },[password]);

  useEffect(()=>{
      passwordGenerator();
  },[length,includeNumbers,includeSymbols,passwordGenerator]);


  return (
  
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
    <div className="backdrop-blur-lg bg-white/10 p-6 rounded-2xl shadow-lg w-96 text-white border border-white/20">
      <h2 className="text-2xl font-bold text-center mb-4">Password Generator</h2>
      
      <div className="bg-white/20 p-3 rounded-lg text-black flex justify-between items-center mb-4">
        <input 
          type="text" 
          readOnly 
          value={password}
          ref={passwordRef}
          className="bg-transparent outline-none w-full text-white placeholder-gray-300"
          placeholder="Generated password" 
        />
        <button className="text-white hover:text-gray-300" onClick={copytoClipboard}>
          Copy
        </button>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Password Length: {length}</label>
        <input 
          type="range" 
          min="6" max="20" 
          value={length} 
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full cursor-pointer" 
        />
      </div>

      <div className="flex gap-4 mb-4">
        <label className="flex items-center gap-2">
          <input 
          type="checkbox"  
          checked={includeNumbers} 
          onChange={() => setIncludeNumbers(!includeNumbers)}
            />
          Include Numbers
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox"
          checked={includeSymbols} 
          onChange={() => setIncludeSymbols(!includeSymbols)}
          />
          Include Symbols
        </label>
      </div>

    </div>
  </div>)
}

export default App
