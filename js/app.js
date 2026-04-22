const headerToggle = document.querySelector('.header__toggle');
const headerNav = document.querySelector('.header__nav');

headerToggle.addEventListener('click', () => {
  headerNav.classList.toggle('active');
});
