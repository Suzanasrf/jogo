const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const botao = document.querySelector('button');



const jump = () => {
    mario.classList.add('jump');
    
    setTimeout(() =>{
            mario.classList.remove('jump');

    }, 500);
}


const loop = setInterval(() =>{
    const pipePosition =  pipe.offsetLeft;
    const marioPosition= +window.getComputedStyle(mario).bottom.replace('px', '');

    
    if(pipePosition <= 120  && pipePosition >0  && marioPosition < 90){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
         mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        
        mario.src = 'mario-game_over.jpg';
        mario.style.width = '80px'
        mario.style.bottom = '110px'
        mario.style.left = '80px'
        
        clearInterval(loop);
    }
    
}, 10)





  


  
document.addEventListener('keydown', jump);