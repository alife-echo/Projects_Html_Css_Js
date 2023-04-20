let musics = [ 
    {name:'Black Flag Main Theme',author:'Ubisoft Music',srcAudio:'./themes/edwardSong.mp3',srcImg:'./imgs/kenway.png'},
    {name:'Can You Feel My Heart',author:'Bring Me The Horizon',srcAudio:'./themes/bringMeHorizon.mp3',srcImg:'./imgs/gigachad.jpg'},
    {name:'Make It Bun Dem',author:'Damian Marley',srcAudio:'./themes/makeItBun.mp3',srcImg:'./imgs/vaas.jpg'},
    {name:'Do I Wanna Know',author:'Arctic Monkeys',srcAudio:'./themes/doIWannaKnow.mp3',srcImg:'./imgs/alex.jpg'},
    {name:'Epilogue Main Theme ',author:'Hans Zimmer',srcAudio:'./themes/crisisEpilogue.mp3',srcImg:'./imgs/prophet.jpg'},
    {name:'Forest Swords',author:'Hood',srcAudio:'./themes/forestSwords.mp3',srcImg:'./imgs/shay.jpg'}
]
let show = false
let imgState =  document.querySelector('#btnStateMusic')
let titleMusic = document.querySelector('#titleMusic')
let authorMusic = document.querySelector('#detailsMusic')
let imgAlbum = document.querySelector('#imgMusicShow')
let audioPlayer = null
//new Audio(url)
/*
play(): reproduz o áudio.
pause(): pausa o áudio.
currentTime: define ou retorna a posição atual do áudio em segundos.
duration: retorna a duração total do áudio em segundos.
*/
window.onload = ()=> {
let containerMusics = document.querySelector('.playListContainer')
if(show === false){
  imgState.src = './imgs/play-button.jpg'
}
 musics.map(item => {
        let imgMusic = document.createElement('img')
        let itemMusic = document.createElement('div')
        let infoMusic = document.createElement('div')
        let titleMusic = document.createElement('p')
        let authorMusic = document.createElement('p')
        let textTitle = document.createTextNode(item.name)
        let textAuthor = document.createTextNode(item.author)
        itemMusic.className = 'itemMusic'
        itemMusic.setAttribute('song',`${item.srcAudio}`)
        infoMusic.className = 'infoMusic'
        itemMusic.id = 'music'
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
    //console.log(themes[i].getAttribute('song'))
    let themes = document.getElementsByClassName('itemMusic')
    for(let i = 0 ; i<themes.length;i++){
         themes[i].addEventListener('click',(e)=> {
           let songTarget = e.target.closest('.itemMusic')
            titleMusic.innerHTML = songTarget.children[1].children[0].textContent
            authorMusic.innerHTML = songTarget.children[1].children[1].textContent
            imgAlbum.src =  songTarget.children[0].src

            if (audioPlayer) {
                audioPlayer.pause();
              }
          
              // Criar uma nova instância de áudio para a nova música
              audioPlayer = new Audio(themes[i].getAttribute('song'));
              let context = new AudioContext();
              let src = context.createMediaElementSource(audioPlayer);
              let analyser = context.createAnalyser();
          
              let canvas = document.getElementById("canvas");
              canvas.width = window.innerWidth;
              canvas.height = window.innerHeight;
              let ctx = canvas.getContext("2d");
          
              src.connect(analyser);
              analyser.connect(context.destination);
          
              analyser.fftSize = 256;
          
              let bufferLength = analyser.frequencyBinCount;
              console.log(bufferLength);
          
              let dataArray = new Uint8Array(bufferLength);
          
              let WIDTH = canvas.width;
              let HEIGHT = canvas.height;
          
              let barWidth = (WIDTH / bufferLength) * 2.5;
              let barHeight;
              let x = 0;
          
              function renderFrame() {
                requestAnimationFrame(renderFrame);
          
                x = 0;
          
                analyser.getByteFrequencyData(dataArray);
          
                ctx.fillStyle = "#FEEDED";
                ctx.fillRect(0, 0, WIDTH, HEIGHT);
          
                for (let i = 0; i < bufferLength; i++) {
                  barHeight = dataArray[i];
                  
                  let r = barHeight + (25 * (i/bufferLength));
                  let g = 250 * (i/bufferLength);
                  let b = 50;
          
                  ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
                  ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
          
                  x += barWidth + 1;
                }
              }
          
              audioPlayer.play();
              renderFrame();
            
     
         })
    }
    
}



document.querySelector("#btnBackMusic").addEventListener('click',()=>{
})

document.querySelector("#btnStateMusic").addEventListener('click',()=>{
    let state = !show
    if(state === true){
        imgState.src = './imgs/pause-button.jpg'
    }
    else if (state === false){
        imgState.src = './imgs/play-button.jpg'
   
    }
    show = state;
})

document.querySelector("#btnNextMusic").addEventListener('click',()=>{
})

document.querySelector("#btnVolumeUp").addEventListener('click',()=>{
})
document.querySelector("#btnLoop").addEventListener('click',()=>{
})

document.querySelector("#btnVolumeDown").addEventListener('click',()=>{
})
