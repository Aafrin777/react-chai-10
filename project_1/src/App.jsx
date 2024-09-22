/*
cd react_10
cd project_1
npm run dev 
*/

//counter project

//-------hook----
import { useState } from 'react';
import './App.css'

function App() {
let [counter , setCounter] = useState(10)
  // let counter = 0

  let addValue = () => {
    console.log("clicked" ,counter);

    //setCounter(counter + 1)
      counter = counter + 1
  setCounter(counter)
}

let removeValue = () => {
  if(counter > 0 ){
    counter = counter - 1
    setCounter(counter)
  }
}

  return (
    <>
   <h1>countern project</h1>
   <button
   onClick={addValue}>Add value</button>
   <button onClick={removeValue}>remove value</button>
   <h3>counter value {counter}</h3>
    </>
  )
}

export default App
