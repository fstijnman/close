const sidebar = document.querySelector('.left');
const mainContent = document.querySelector('.right');
const colButton = document.querySelector('.collapse-button')
document.querySelector('.collapse-button').onclick = function () {
    sidebar.classList.toggle('left-small');
    mainContent.classList.toggle('right-large');
    colButton.classList.toggle('collapse-button-collapsed');
}