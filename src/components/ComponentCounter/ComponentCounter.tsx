import { useState } from "react"

export const ComponentCunter = () => {
  const [counter,setCounter] = useState<number>(0)

  const incrementCounter = () =>{
    setCounter((prev)=>prev+1)
  }

  return (
    <div>
      <h2>valor de counter: {counter}</h2>
      <button onClick={incrementCounter}>Incrementar</button>

    </div>
  )
}
