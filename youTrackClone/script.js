
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