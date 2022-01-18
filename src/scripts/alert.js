export const openAlert = (text) => {
  let alertModal = document.getElementsByClassName("alert-modal")
  let alert = document.getElementsByClassName("alert")
  let close = document.getElementsByClassName("close")

  alertModal[0].style = 'display: true'
  alert[0].innerText = text
  close[0].addEventListener('click', () => {
    alertModal[0].style = 'display: none';
  });
}