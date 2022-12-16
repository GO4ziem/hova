console.log('hello world')
const menubar = document.getElementById('fa-bars');
const menu = document.getElementById('menu');

menubar.addEventListener('click', () => {
    menu.classList.toggle('active')
})