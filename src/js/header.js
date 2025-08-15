(() => {
  const refs = {
    openMenuBtn: document.querySelector('.header-mob-menu-open-btn'),
    closeMenuBtn: document.querySelector('.header-mob-menu-close-btn'),
    menu: document.querySelector('.header-mob-menu'),
  };

  // Only add event listeners if elements exist
  if (refs.openMenuBtn) {
    refs.openMenuBtn.addEventListener('click', toggleMenu);
  }
  
  if (refs.closeMenuBtn) {
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
  }

  function toggleMenu() {
    document.body.classList.toggle('header-menu-open');
    if (refs.menu) {
      refs.menu.classList.toggle('visually-hidden');
    }

    const authHeader = document.getElementById('auth-header');
    if (
      !document
        .getElementsByTagName('body')[0]
        .classList.toString()
        .includes('header-menu-open') &&
      window.innerWidth < 767 &&
      authHeader
    ) {
      authHeader.removeAttribute('style');
    } else if (authHeader) {
      authHeader
        .setAttribute('style', 'display: block');
    }
  }
})();
