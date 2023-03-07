
let btnAddStyle = document.querySelectorAll('.styleButton')
let titleTaskInput = document.getElementById('inTaskTitle')
let taskAreaInput = document.getElementById('inTaskArea')
let stageElements = document.querySelectorAll('.open, .progress, .toVerify, .concluded');
let modal = document.querySelector('.modal')
let titlesSumary = []
let copyTrash = ''
let divStage = ''
//open modal
for(spanAddCard of btnAddStyle){
    spanAddCard.addEventListener('click',()=>{
      let modal = document.querySelector('.modal')
      modal.classList.add('showModal')
 })
  }
// close modal
document.getElementById('btnCancelTask').addEventListener('click',()=>{ 
    modal.classList.remove('showModal')
    titleTaskInput.value = ''
    taskAreaInput.value = ''
})
//fixed bug parentParent
for(fixedBugSpanCard of btnAddStyle){
  fixedBugSpanCard.addEventListener('click', (e) => {
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
//validate inputs modal and call createTodo
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
//create todo
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
    captureTitle(sumary)
    details.appendChild(sumary)
    details.appendChild(p)
    div.appendChild(details)
    div.appendChild(input)
    modal.classList.remove('showModal')
    titleTaskInput.value = ''
    taskAreaInput.value = ''   
    deleteTodo(input)
   
}
//delete todo specif
function deleteTodo (element) {
  let elementTrash = document.querySelectorAll('#' + element.id)
  for (let i = 0; i < elementTrash.length; i++) {
    elementTrash[i].addEventListener('click', (e) => {
      e.stopImmediatePropagation()
      let contentTodo = e.target.closest('.contentTodo')
      if (contentTodo) {
        contentTodo.remove()
        backAdjustHeight()
      }
    })
   
  }

}



//adjustBoxTodo
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
//adjustBoxTodoDown
function backAdjustHeight () {
      stageElements.forEach(item => {
         let observer = new MutationObserver(()=> {
           stageElements.forEach (x =>{
              
              x.style.transition = 'min-height 0.3s ease-in-out';
              x.style.minHeight = '10rem';
             
           })
         })
         observer.observe(item,{childList:true,subtree:true})
      })
}

//storage elements title
function captureTitle(elementTile){
    titlesSumary.push(elementTile)
}
 //filter
document.getElementById('inSearch').addEventListener('input',(e)=>{
      if(e.target.value != ''){
        for(titles of  titlesSumary){
          let textList = titles.textContent.toLowerCase()
          let parent = titles.parentNode.parentNode
          if(!textList.includes(e.target.value.toLowerCase())){ 
             parent.style.display = 'none'
          }
          else{
            parent.style.display = 'flex'
          }
        }
      }
      else{
         for(titles of titlesSumary){
           let parent = titles.parentNode.parentNode
           parent.style.display = 'flex'
         }
      }
})


