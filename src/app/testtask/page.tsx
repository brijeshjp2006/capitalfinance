"use client"
import React, { useState } from 'react'

function Page() {

  
  const [valt, setValt]=useState<string | undefined>();

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
setValt(e.target.value)

  }
  return (
    <div>
         <h1>Typescript interface work</h1>

         <input type='text' value={valt} placeholder='Type text here' onChange={handleChange}/>
         <h2>{valt}</h2>
    </div>
  )
}

export default Page
