const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar-mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', () => {
  mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    if(this.window.scrollY > 0) return navbar.classList.add('active')
    return navbar.classList.remove('active')
})