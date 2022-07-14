window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
}

function showNavOnScroll() {
  if(scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
#navigation,
#navigation .menu,
#presentation,
#presentation .presentation,
#presentation .contatiner,
#portfolio,
#portfolio .portfolio,
#portfolio .container`);