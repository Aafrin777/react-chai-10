import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
const main = () => {
  return (
    <div>
      <h1>hello mainhhhhh</h1>
    </div>
  )
}
export default main

/*const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me'
} */


/*
const reacrElement = React.createElement(
//type,
//key,
ref,
props
  'a',
  {
   href:'https:gppgle.com',
    target:'_blank'
  },
  'click me to visit google'
)
*/

const anotherElement =(
  <a href='https://google.com' target="_blank">visitg  google</a>
)



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    anotherElement
    //reacrElement
    // <App />
  // </React.StrictMode>
)
