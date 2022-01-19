export function setModal(){
  let startButton = document.getElementsByClassName('start-button')
  let modalBg = document.getElementsByClassName("modal-background")

  let music = document.getElementById("music")
  let playButton = document.getElementById("play-button")

  startButton[0].addEventListener('click', () => {
    modalBg[0].style = 'display: none';

    if (music.paused) {
      music.volume = 0.5
      music.loop = true
      music.play()
      playButton.src = "images/audio-on.png"
    }
  })
}