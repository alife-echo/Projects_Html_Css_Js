let boxes = 99
window.addEventListener('load',()=>{
     let containerProcess = document.getElementById('numberProcess')
     for(let i  = 0; i<100;i++){
        let divBoxProcess = document.createElement('div')
        let divBoxHeader = document.createElement('div')
        let span = document.createElement('span')
        let title = document.createTextNode(i)
        divBoxProcess.classList.add('boxProcess')       
        divBoxHeader.classList.add('headerBoxProcess')
        containerProcess.appendChild(divBoxProcess)
        divBoxProcess.appendChild(divBoxHeader)
        divBoxHeader.appendChild(span)
        span.appendChild(title)
     }
})

