
let btnAdd = document.querySelectorAll('.styleButton')
let titleTaskInput = document.getElementById('inTaskTitle')
let taskAreaInput = document.getElementById('inTaskArea')
for(let i =0; i<btnAdd.length;i++){
    btnAdd[i].addEventListener('click',()=>{
         let modal = document.querySelector('.modal')
         modal.classList.add('showModal')
    })
}
document.getElementById('btnCancelTask').addEventListener('click',()=>{
    let modal = document.querySelector('.modal')
    modal.classList.remove('showModal')
    titleTaskInput.value = ''
    taskAreaInput.value = ''
})
document.getElementById()


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