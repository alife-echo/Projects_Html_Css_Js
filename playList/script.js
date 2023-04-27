let musics = [ 
    {name:'Black Flag Main Theme',author:'Ubisoft Music',srcAudio:'./themes/edwardSong.mp3',srcImg:'./imgs/kenway.png'},
    {name:'Can You Feel My Heart',author:'Bring Me The Horizon',srcAudio:'./themes/bringMeHorizon.mp3',srcImg:'./imgs/gigachad.jpg'},
    {name:'Make It Bun Dem',author:'Damian Marley',srcAudio:'./themes/makeItBun.mp3',srcImg:'./imgs/vaas.jpg'},
    {name:'Do I Wanna Know',author:'Arctic Monkeys',srcAudio:'./themes/doIWannaKnow.mp3',srcImg:'./imgs/alex.jpg'},
    {name:'Epilogue Main Theme ',author:'Hans Zimmer',srcAudio:'./themes/crisisEpilogue.mp3',srcImg:'./imgs/prophet.jpg'},
    {name:'Forest Swords',author:'Hood',srcAudio:'./themes/forestSwords.mp3',srcImg:'./imgs/shay.jpg'}
]
let show = false
let audioPlayer = null
let loop = false
let imgState =  document.querySelector('#btnStateMusic')
let titleMusic = document.querySelector('#titleMusic')
let authorMusic = document.querySelector('#detailsMusic')
let imgAlbum = document.querySelector('#imgMusicShow')
let themes = document.getElementsByClassName('itemMusic')


window.addEventListener('load',()=> {
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
    
    choiceThemeClicked(themes,'')
})


function choiceThemeClicked (themes = '') {
  for(let i = 0 ; i<themes.length;i++){
    themes[i].addEventListener('click',(e)=> {
      let songTarget = e.target.closest('.itemMusic')
       updateMusicEvent(songTarget,'')
       shadowSongClicked(themes,songTarget)
       dispathLoopEventClick(document.querySelector('#btnLoop'))
       stopMusicAfterChoiceOtherMusic(audioPlayer)
       getSeconds()
 
       audioPlayer = new Audio(themes[i].getAttribute('song'));
       renderFrame(audioPlayer)
  
      
       audioPlayer.play();

       show = true
       if(show == true){
           imgState.src = './imgs/pause-button.jpg'
        }

    })
}

}

function renderFrame(audioPlayer) {
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


  let dataArray = new Uint8Array(bufferLength);

  let WIDTH = canvas.width;
  let HEIGHT = canvas.height;

  let barWidth = (WIDTH / bufferLength) * 2.5;
  let barHeight;
  let x = 0;

  function draw() {
    requestAnimationFrame(draw);

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

  draw();
}


function dispathLoopEventClick(themeSelect){
  if (themeSelect.classList.contains('borderSelect')) {
    themeSelect.classList.remove('borderSelect');
    loop = false
  }
}

function stopMusicAfterChoiceOtherMusic(audioPlayer){
  if (audioPlayer) {
    audioPlayer.pause();            
  }
}


function shadowSongClicked (themes,songTarget){
    for(let j = 0; j<themes.length;j++){
      themes[j].classList.remove('shadow')
      
  }
      songTarget.classList.add('shadow')
}



function updateMusicEvent(songTarget = '' ,object=''){
  if(songTarget !== ''){
    titleMusic.innerHTML = songTarget.children[1].children[0].textContent
    authorMusic.innerHTML = songTarget.children[1].children[1].textContent
    imgAlbum.src =  songTarget.children[0].src
  }
  else if( object != ''){
     titleMusic.innerHTML = object.name
     authorMusic.innerHTML = object.author
     imgAlbum.src = object.srcImg
  }   
}


document.querySelector("#btnBackMusic").addEventListener('click',()=>{
})

document.querySelector("#btnStateMusic").addEventListener('click',()=>{
    let state = !show
    if(state === true){
        imgState.src = './imgs/pause-button.jpg'
        audioPlayer.play()
      
    }
    else if (state === false){
        imgState.src = './imgs/play-button.jpg'
        audioPlayer.pause()
   
    }
    show = state;
})

document.querySelector("#btnNextMusic").addEventListener('click',()=>{
  stopMusicAfterChoiceOtherMusic(audioPlayer)
  for(let i = 0; i<musics.length;i++){
     if((audioPlayer.src).replace('http://127.0.0.1:5500','.') == musics[i].srcAudio){
            audioPlayer = new Audio(musics[i + 1].srcAudio)
            renderFrame(audioPlayer)
            audioPlayer.play()
            updateMusicEvent('',musics[i + 1])
            break
     }
  }
})

document.querySelector("#btnVolumeUp").addEventListener('click',()=>{
  if (audioPlayer.volume < 1.0) {
    audioPlayer.volume += 0.2;

  }
})
document.querySelector("#btnLoop").addEventListener('click',()=>{
    let stateMusic = !loop
   if(stateMusic === true){
      audioPlayer.loop = true
      document.querySelector('#btnLoop').classList.add('borderSelect') 
   }
   else if (stateMusic == false){
      audioPlayer.loop = false
      document.querySelector('#btnLoop').classList.remove('borderSelect')
   }
   loop = stateMusic
})

document.querySelector("#btnVolumeDown").addEventListener('click',()=>{
  if (audioPlayer.volume > 0.0) {
    audioPlayer.volume -= 0.2;
  }
})

function getSeconds(){
  setInterval(function() {
      let count = document.querySelector('#duration')
      let secondsNow = Math.floor(audioPlayer.currentTime);
      let minutes = Math.floor(secondsNow / 60);
      let seconds =  secondsNow % 60;
      var contadorFormatado = minutes.toString().padStart(2, '0') + ':' + seconds .toString().padStart(2, '0');
      count.innerHTML = contadorFormatado
      if(secondsNow === Math.floor(audioPlayer.duration)){
        if(loop === true){
          imgState.src = './imgs/pause-button.jpg'
        }
        else{
          imgState.src = './imgs/play-button.jpg'
        }
        
     }
      return contadorFormatado
   
  }, 1000);
}



//new Audio(url)
/*
play(): reproduz o áudio.
pause(): pausa o áudio.
currentTime: define ou retorna a posição atual do áudio em segundos.
duration: retorna a duração total do áudio em segundos.
*/