//color change project

import { useState } from "react";
function App() {
const [color, setColor] = useState("olive")
  return (
    <>
    <div className="relative h-[1200px] w-[500px] rounded-md" style={{backgroundColor:color}}>
</div>

<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl " >

<button
//onclick requered function and this is callback function
onClick={() => setColor("red")}
 className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
style={{backgroundColor:"red"}}
> RED</button>

<button
onClick={() => setColor("green")}
 className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
style={{backgroundColor:"green"}}
> Green</button>

<button
onClick={() => setColor("blue")}
className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
style={{backgroundColor:"blue"}}
>blue</button>

</div>
</div>


    </>
  );
}

export default App;
