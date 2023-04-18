let musics = [ 
    {name:'Black Flag Main Theme',author:'Ubisoft Music',srcAudio:'./themes/edwardSong.mp3',srcImg:'./imgs/kenway.png'},
    {name:'Can You Feel My Heart',author:'Bring Me The Horizon',srcAudio:'./themes/bringMeHorizon.mp3',srcImg:'./imgs/gigachad.jpg'},
    {name:'Make It Bun Dem',author:'Damian Marley',srcAudio:'./themes/makeItBun.mp3',srcImg:'./imgs/vaas.jpg'},
    {name:'Do I Wanna Know',author:'Arctic Monkeys',srcAudio:'./themes/doIWannaKnow.mp3',srcImg:'./imgs/alex.jpg'},
    {name:'Epilogue Main Theme ',author:'Hans Zimmer',srcAudio:'./themes/crisisEpilogue.mp3',srcImg:'./imgs/prophet.jpg'},
    {name:'Forest Swords',author:'Hood',srcAudio:'./themes/forestSwords.mp3',srcImg:'./imgs/shay.jpg'}
]
//new Audio(url)
/*
play(): reproduz o áudio.
pause(): pausa o áudio.
currentTime: define ou retorna a posição atual do áudio em segundos.
duration: retorna a duração total do áudio em segundos.
*/
window.onload = ()=> 
{
let containerMusics = document.querySelector('.playListContainer')
 musics.map(item => {
    let imgMusic = document.createElement('img')
    let itemMusic = document.createElement('div')
    let infoMusic = document.createElement('div')
    let titleMusic = document.createElement('p')
    let authorMusic = document.createElement('p')
    let textTitle = document.createTextNode(item.name)
    let textAuthor = document.createTextNode(item.author)
    itemMusic.className = 'itemMusic'
    infoMusic.className = 'infoMusic'
    imgMusic.className = 'itemImg'
    titleMusic.className = 'titleMusic'
    authorMusic.className = 'authorMusic'
    imgMusic.src = item.srcImg
    itemMusic.appendChild(imgMusic)
    itemMusic.appendChild(infoMusic)
    titleMusic.appendChild(textTitle)
    authorMusic.appendChild(textAuthor)
    infoMusic.appendChild(titleMusic)
    infoMusic.appendChild(authorMusic)  
    containerMusics.appendChild(itemMusic)
 })
        
   
}

document.querySelector("#btnBackMusic").addEventListener('click',()=>{
})

document.querySelector("#btnStateMusic").addEventListener('click',()=>{
})

document.querySelector("#btnNextMusic").addEventListener('click',()=>{
})

document.querySelector("#btnVolumeUp").addEventListener('click',()=>{
})
document.querySelector("#btnLoop").addEventListener('click',()=>{
})

document.querySelector("#btnVolumeDown").addEventListener('click',()=>{
})
