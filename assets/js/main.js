const menuMobile = document.getElementById('menu-mobile')

function toggleMenu() {
  const nav = document.getElementById('nav')
  nav.classList.toggle('active') 
}

menuMobile.addEventListener('click', toggleMenu)