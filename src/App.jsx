import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [length , setLength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed , setcharAllowed] = useState(false);
  const [password , setPassword] = useState("")

  const passWordgenerator = useCallback(() => {
      let pass = "" 
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if(numberAllowed) str += "1234567890" 
      if(charAllowed)   str +=  "!@#$%^&*()~+{}:>?<|"

      for(let i = 1 ; i <= length ; i++){
         let generatedPassword = Math.floor(Math.random() * str.length + 1);
         pass += str.charAt(generatedPassword)
        
      }

      setPassword(pass)

  }, [length, numberAllowed , charAllowed , setPassword]);

  useEffect( () => {
    passWordgenerator() }, [length, numberAllowed , charAllowed , setPassword ]
  )

  return (
        <div className=' w-full  max-w-3xl  mx-auto border-solid rounded-md px-10 py-5 my-16  text-orange-600 bg-gray-600'>

              <h1 className='text-white font-bold text-center mb-3 text-3xl'>Pasword Generator</h1>
              <div className='flex overflow-hidden mb-4 rounded-md  '>
                <input 
                type="text" 
                value={password}
                className='outline-none w-full py-1 px-3'
                placeholder='Password'
                readOnly
                />

                <button className='bg-blue-700 py-3 px-5 font-extrabold'>Copy</button>
            </div>

            <div className='text-md font-bold flex gap-x-4'>
                
                <div className=' flex items-center  gap-x-4'>
                        <input 
                        type="range"
                        min = {6} 
                        max = {100}
                        value={length} 
                        className='cursor-pointer'
                        onChange={(e) => {setLength(e.target.value)}}
                        />
                        <label>Length : {length}</label>
                </div>

                <div className=' flex items-center  gap-x-1'>
                       <input 
                       type="checkbox"
                       defaultChecked = {numberAllowed}
                       id = "numberInput"
                       onChange={() => {
                        setNumberAllowed((prev) => !prev);
                      }}
                       />

                       <label >Numbers</label>

                </div>

                <div className=' flex items-center  gap-x-1'>
                       <input 
                       type="checkbox"
                       defaultChecked = {charAllowed}
                       id = "charInput"
                       onChange={() => {
                        setcharAllowed((prev) => !prev);
                      }}
                       />

                       <label >Charecter </label>

                </div>

            </div>

        </div>   

  )
}

export default App
