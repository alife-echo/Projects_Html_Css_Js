let boxes = 99
window.addEventListener('load',()=>{
     let containerProcess = document.getElementById('numberProcess')
     for(let i  = 0; i<100;i++){
        let divBoxProcess = document.createElement('div')
        let divBoxHeader = document.createElement('div')
        let span = document.createElement('span')
        let title = document.createTextNode(i)
        divBoxProcess.classList.add('boxProcess')
        divBoxHeader.classList.add('headerBoxProcess')
        containerProcess.appendChild(divBoxProcess)
        divBoxProcess.appendChild(divBoxHeader)
        divBoxHeader.appendChild(span)
        span.appendChild(title)
     }

     gsap.from(".boxProcess", {
        duration: 2,
        scale: 0.5, 
        opacity: 0, 
        delay: 0.5, 
        stagger: 0.2,
        ease: "elastic", 
        force3D: true
      });
      
      document.querySelectorAll(".boxProcess").forEach(function(box) {
        box.addEventListener("click", function() {
          gsap.to(".boxProcess", {
            duration: 0.5, 
            opacity: 0, 
            y: -100, 
            stagger: 0.1,
            ease: "back.in"
          });
        });
      });
})

