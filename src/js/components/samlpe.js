//display Call active

document.getElementById('call').addEventListener('click', () => {
  document.getElementById('quest').style.display = "flex";
})

document.getElementById('modal__close').addEventListener('click', () => {
  document.getElementById('quest').style.display = "none";
})

// Color header after scroll

document.addEventListener('scroll', () => {
  if (window.pageYOffset) {
    document.querySelector('.header').classList.add('color--light')
  }
  else {
    document.querySelector('.header').classList.remove('color--light')

  }
})


