document.getElementById('btnMenu').addEventListener('click',(e)=>{
    e.preventDefault()
        document.getElementById('sideBar').style.width = '20%'
        document.getElementById('shadowBar').style.width = '100%'
       
})

let elements = document.querySelectorAll('#sideBar,#shadowBar')
for(let i = 0;i<elements.length;i++){
     elements[i].addEventListener('click',()=>{
        document.getElementById('sideBar').style.width = '0%'
        document.getElementById('shadowBar').style.width = '0%'
     })
}