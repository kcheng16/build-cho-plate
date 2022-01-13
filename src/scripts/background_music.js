
export function setBackgroundMusic(){
  const music = document.getElementById("music")
  const playButton = document.getElementById("play-button")

  playButton.addEventListener("click", () => {
    if (music.paused) {
      music.volume = 0.5
      music.loop = true
      music.play()

      playButton.src = "images/audio-on.png"
    } else {
      music.pause()
      playButton.src = "images/audio-off.png"
    }
  })
}