(() => {
  const refs = {
    openNavBtn: document.querySelector('[nav-open]'),
    closeNavBtn: document.querySelector('[nav-close]'),
    nav: document.querySelector('[navPage]'),
  };

  refs.openNavBtn.addEventListener('click', toggleNav);
  refs.closeNavBtn.addEventListener('click', toggleNav);

  function toggleNav() {
    refs.nav.classList.toggle('is-hidden');
  }
})();
