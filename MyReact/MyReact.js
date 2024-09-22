


function customRender(reactElement, container) {
    
 const domElement = document.createElement (reactElement.type)
 domElement.innerHTML = reactElement.children

for(const prop in reactElement.props){
    if(prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.props [prop])
}
container.appendChild(domElement)
}


//this is javascr. we can create same thing with react in main.jsx
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me'
}

const mainContainer = document.querySelector('#root')
customRender(reactElement, mainContainer)
