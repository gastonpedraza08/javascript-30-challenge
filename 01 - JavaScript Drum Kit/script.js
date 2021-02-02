document.addEventListener('keydown', activarSonido)

function activarSonido(e){
    div = document.querySelector(`div[data-key="${e.keyCode}"]`)
    audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    div.classList.toggle('playing')
    audio.currentTime = 0
    audio.play()
}

allHTML = Array.from(document.querySelectorAll('.key'))
allHTML.forEach(element => {
    element.addEventListener('transitionend', removeClass)
});

function removeClass(e){
    if(e.propertyName!=='transform'){
        return
    }else{
        e.target.classList.remove('playing')
    }
}