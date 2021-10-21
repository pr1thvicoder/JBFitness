
// slide animation
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.navLinks');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
}

// navbar animation
window.addEventListener('scroll', function () {
  let header = document.querySelector('.navHeader');
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolling-active', windowPosition);
})



navSlide();