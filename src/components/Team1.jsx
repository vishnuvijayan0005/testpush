import React, { useEffect } from 'react'
import { useState } from 'react'
function Team1(props) {
    const [count, setCount] = useState(0)
    useEffect (()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))
      console.log("score changes"),[];

    }
    )
  return (
    <>
    <h1>{props.team}</h1>
      <h2>{count}</h2>
      <button onClick={()=>{setCount(count+10)}} >Goal</button>
      <button onClick={()=>{setCount(count-5)}} >Yellow Card</button>
      <button onClick={()=>{setCount(0)}} >Game Over</button>
    </>

    
  )
}

export default Team1