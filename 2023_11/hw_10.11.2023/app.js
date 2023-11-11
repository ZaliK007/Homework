const p = document.querySelector('p')
p.addEventListener('click', (events) =>{
    if (events.target.localName == 'p'){
        p.style = 'color: blue'
    }
})

const header = document.querySelector('h1')
header.addEventListener('click', (events) =>{
    if (events.target.localName == 'h1'){
        header.style = 'color: red'
    }
})
