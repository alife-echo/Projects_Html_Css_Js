
let btnAdd = document.querySelectorAll('.styleButton')
let titleTaskInput = document.getElementById('inTaskTitle')
let taskAreaInput = document.getElementById('inTaskArea')
let modal = document.querySelector('.modal')
let divStage = ''
for(let i =0; i<btnAdd.length;i++){
    btnAdd[i].addEventListener('click',()=>{
         let modal = document.querySelector('.modal')
         modal.classList.add('showModal')
    })
}
document.getElementById('btnCancelTask').addEventListener('click',()=>{ 
    modal.classList.remove('showModal')
    titleTaskInput.value = ''
    taskAreaInput.value = ''
})

let addTaskButtons = document.querySelectorAll('.styleButton');
addTaskButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {

    let parentDiv = (event.target.parentNode).parentNode;

    let parentClassName = parentDiv.classList[0];
    divStage = parentClassName
    console.log(parentClassName);
  });
});
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
}

document.getElementById('btnAdd').addEventListener('click',(e)=>{
  let inTaskTitleText = document.getElementById("inTaskTitle").value
  let inTaskTextArea = document.getElementById('inTaskArea').value
  if(inTaskTextArea == '' || inTaskTitleText == ''){
     alert('Informe os dados corretamente')
  }
  else{
    createTodo(inTaskTitleText,inTaskTextArea,divStage)
  }

})
console.log(document.querySelector('.open,.progress,.toVerify,.concluded:last-of-type').offsetHeight)
/* 
var divsBoxTodo = document.querySelectorAll('.boxTodo');

// função para atualizar a altura de todas as divs boxTodo
function atualizarAlturaBoxTodo() {
  // obtém a altura do último contentTodo adicionado
  var alturaContentTodo = document.querySelector('.contentTodo:last-of-type').offsetHeight;

  // atualiza a altura de todas as divs boxTodo com a altura do último contentTodo adicionado
  for (var i = 0; i < divsBoxTodo.length; i++) {
    divsBoxTodo[i].style.height = alturaContentTodo + 'px';
  }
}

// adiciona um evento onchange para detectar quando um novo contentTodo é adicionado
var inputContentTodo = document.querySelector('#inputContentTodo');
inputContentTodo.addEventListener('change', atualizarAlturaBoxTodo);
*/