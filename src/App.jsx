import { useState } from "react"

function App(){

  const [count, SetCount] = useState(0)


  const increment = () =>{
    SetCount(count + 1)

  }
    

  
  return <>

    <p> Compteur : {count}</p>
    <button onClick={increment}>Incrémenter</button>
  
  </>




}

export default App