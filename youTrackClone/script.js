
let btnAdd = document.querySelectorAll('.styleButton')
for(let i =0; i<btnAdd.length;i++){
    btnAdd[i].addEventListener('click',()=>{
         let modal = document.querySelector('.modal')
         modal.classList.add('showModal')
    })
}
document.getElementById('btnCancelTask').addEventListener('click',()=>{
    let modal = document.querySelector('.modal')
    modal.classList.remove('showModal')
})