
document.getElementById('btnMenu').addEventListener('click',(e)=>{
    e.preventDefault()
    if(window.innerWidth <= 700){
        document.getElementById('sideBar').style.width = '50%'
    }
    else if(window.innerWidth <= 1100){
        document.getElementById('sideBar').style.width = '30%'
    }
    else if(window.innerWidth <= 360){
        document.getElementById('sideBar').style.width = '100%'
       
    }
    else{
        document.getElementById('sideBar').style.width = '20%'
    }
    document.getElementById('shadowBar').style.width = '100%'
})

let elements = document.querySelectorAll('#sideBar,#shadowBar')
for(let i = 0;i<elements.length;i++){
     elements[i].addEventListener('click',()=>{
        document.getElementById('sideBar').style.width = '0%'
        document.getElementById('shadowBar').style.width = '0%'
     })
}