//remove start img==============================================
export const closeModal = () => {
  let startButton = document.getElementsByClassName('start-button')
  let modalBg = document.getElementsByClassName("modal-background")

  startButton[0].addEventListener('click', () => {
    modalBg[0].style = 'display: none';
  });
}

// export default closeModal