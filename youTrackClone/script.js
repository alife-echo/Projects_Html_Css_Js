
let btnAddStyle = document.querySelectorAll('.styleButton')
let titleTaskInput = document.getElementById('inTaskTitle')
let taskAreaInput = document.getElementById('inTaskArea')
let stageElements = document.querySelectorAll('.open, .progress, .toVerify, .concluded');
let modal = document.querySelector('.modal')
let copyTrash = ''
let divStage = ''
for(let i =0; i<btnAddStyle.length;i++){
  btnAddStyle[i].addEventListener('click',()=>{
         let modal = document.querySelector('.modal')
         modal.classList.add('showModal')
    })
}
document.getElementById('btnCancelTask').addEventListener('click',()=>{ 
    modal.classList.remove('showModal')
    titleTaskInput.value = ''
    taskAreaInput.value = ''
})

for(let i = 0; i<btnAddStyle.length;i++){
  btnAddStyle[i].addEventListener('click', (e) => {
    let parentDiv = e.target.parentElement.parentElement;
    if(parentDiv.classList[0] === 'row'){
      divStage =  parentDiv.children[1].classList[0]
    }
    else{
      let parentClassName = parentDiv.classList[0];
      divStage = parentClassName
    }    
  });
}
document.getElementById('btnAdd').addEventListener('click',()=>{
  let inTaskTitleText = document.getElementById("inTaskTitle").value
  let inTaskTextArea = document.getElementById('inTaskArea').value
  if(inTaskTextArea == '' || inTaskTitleText == ''){
     alert('Informe os dados corretamente')
  }
  else{
    createTodo(inTaskTitleText,inTaskTextArea,divStage)
    adjustElementsHeight()
 
  }
})
function createTodo(titleTask,taskTextArea,receiveBox){
    let createClass = '.' + receiveBox
    let containerTodo = document.querySelector(createClass)
    let div = document.createElement('div')
    let details = document.createElement('details')
    let sumary = document.createElement('summary')
    let input = document.createElement('button')
    let p = document.createElement('p')
    let img = document.createElement('img')
    let nodeTextTitle = document.createTextNode(titleTask)
    let nodeTextArea = document.createTextNode(taskTextArea)
    input.classList.add('styleButton')
    div.classList.add('contentTodo')
    input.id = 'btnTrash'
    copyTrash = input
    img.src = './imgs/trash.png'
    img.style.width = '18px'
    img.style.height = '18px'
    containerTodo.appendChild(div)
    input.appendChild(img)
    p.appendChild(nodeTextArea)
    sumary.appendChild(nodeTextTitle)
    details.appendChild(sumary)
    details.appendChild(p)
    div.appendChild(details)
    div.appendChild(input)
    modal.classList.remove('showModal')
    titleTaskInput.value = ''
    taskAreaInput.value = ''   
    deleteTodo(input)
}

function deleteTodo (element) {
  let elementTrash = document.querySelectorAll('#' + element.id)
  for (let i = 0; i < elementTrash.length; i++) {
    elementTrash[i].addEventListener('click', (e) => {
      e.stopImmediatePropagation()
      let contentTodo = e.target.closest('.contentTodo')
      if (contentTodo) {
        contentTodo.remove()
        
      }
    })
  }
}

function adjustElementsHeight() {
  stageElements.forEach(item => {
    let observer = new MutationObserver(() => {
      stageElements.forEach(x => {
        x.style.transition = 'min-height 0.3s ease-in-out';
        x.style.minHeight = item.scrollHeight + 'px';
      });
    });
    observer.observe(item, { childList: true, subtree: true });
  });
}



//for(let i =0; i<x.length;i++){x[i].style.minHeight = '20rem'} codigo de adptação

