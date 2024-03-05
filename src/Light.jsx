import React from 'react'
import { useState } from 'react'

export default function Light() {
   
        const [color,setcolor]=useState("")
        const handleon=()=>{
            setcolor("yellow")
       
    }
    const handleoff=()=>{
        setcolor("white")
   
}
  return (
    <div className='flex justify-center mt-[4rem]  '>
         <div >
       <div style={{backgroundColor:color}} className=' border-2 border-black rounded-[50%] w-[300px] h-[300px]  '>

       </div>
      <div className="ml-[5rem] mt-[2rem]  space-x-3">
      <button onClick={handleon} className='bg-orange-600 py-2 px-5  text-white rounded'>On</button>
       <button onClick={handleoff} className='bg-orange-600 py-2 px-5  text-white rounded'>Off</button>
      </div>

        </div>
    </div>
  )
}
