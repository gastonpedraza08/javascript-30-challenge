const divPlayer = document.querySelector(".player")
const video = divPlayer.querySelector(".viewer")
const progress = divPlayer.querySelector(".progress")
const progress__filled = divPlayer.querySelector(".progress__filled")
const toggle = divPlayer.querySelector(".toggle")
const arrBtnSkip = divPlayer.querySelectorAll("[data-skip]")
const ranges = divPlayer.querySelectorAll(".player__slider")

let togglePlay = () => {
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }
}

let updateButton = () => {
    if(video.paused){
        toggle.textContent = "►"
    }else{
        toggle.textContent = "❚ ❚"
    }
}

let handleProgress = () => {
    const percent = (video.currentTime / video.duration) * 100;
    progress__filled.style.flexBasis = `${percent}%`;
}

let scrub = (e) => {
    video.currentTime = ((e.offsetX / progress.offsetWidth) * video.duration)  
} 

video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)
toggle.addEventListener('click', togglePlay)


arrBtnSkip.forEach(button => {
button.addEventListener(
    //HTML attributes are string values. We want a number, so we parse the value into a `float`
    'click', () => video.currentTime += parseFloat(button.dataset.skip)) 
})
function cambiarRango(){
    video[this.name] = this.value;
}
ranges.forEach(range => {
range.addEventListener('change', cambiarRango)
range.addEventListener('mousemove', cambiarRango)
})


let mousedown = false

progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);