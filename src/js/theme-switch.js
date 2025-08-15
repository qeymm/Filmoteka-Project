const refs = {
  bodyEl: document.querySelector('body'),
  toggleEl: document.querySelector('#theme-switch-toggle'),
  footerDarktheme: document.querySelector('footer'),
  movieBackdrop: document.querySelector('.modal'),
  modalTeam: document.querySelector('.modal-team'),
  sun: document.querySelector('.sun'),
  moon: document.querySelector('.moon'),
  modalVideoContainer: document.querySelector('.modal-video__container')
};

const {
  bodyEl,
  toggleEl,
  footerDarktheme,
  movieBackdrop,
  modalTeam,
  sun,
  moon,
  modalVideoContainer,
} = refs;

// Only add event listeners if elements exist
if (toggleEl) {
  toggleEl.addEventListener('change', event => {
    if (bodyEl.classList.contains('dark-theme')) {
      bodyEl.classList.remove('dark-theme');
      bodyEl.classList.add('light-theme');
      if (footerDarktheme) footerDarktheme.classList.remove('dark-theme');
      if (modalTeam) modalTeam.classList.remove('dark-theme');
      if (modalVideoContainer) modalVideoContainer.classList.remove('dark-theme');
      if (movieBackdrop) movieBackdrop.classList.remove('dark-theme');
    } else {
      bodyEl.classList.remove('light-theme');
      bodyEl.classList.add('dark-theme');
      if (footerDarktheme) footerDarktheme.classList.add('dark-theme');
      if (modalTeam) modalTeam.classList.add('dark-theme');
      if (modalVideoContainer) modalVideoContainer.classList.add('dark-theme');
      if (movieBackdrop) movieBackdrop.classList.add('dark-theme');
    }
  });
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const savedTheme = localStorage.getItem('theme');

if (toggleEl) {
  toggleEl.addEventListener('change', event => {
    localStorage.setItem('theme', bodyEl.classList);
  });
}

updataTheme();
checkboxChecked();
updataThemeFooter();
updataThemeMovieBackdrop();
updataThemeModalTeam();
updataThemeVideoContainer();

function updataTheme() {
  if (savedTheme) {
    bodyEl.classList = savedTheme;
  }
}

function checkboxChecked() {
  if (savedTheme === 'dark-theme' && toggleEl) {
    toggleEl.setAttribute('checked', true);
  }
}

function updataThemeFooter() {
  if (savedTheme === 'dark-theme' && footerDarktheme) {
    footerDarktheme.classList.add('dark-theme');
  }
}

function updataThemeMovieBackdrop() {
  if (savedTheme === 'dark-theme' && movieBackdrop) {
    movieBackdrop.classList.add('dark-theme');
  }
}

function updataThemeModalTeam() {
  if (savedTheme === 'dark-theme' && modalTeam) {
    modalTeam.classList.add('dark-theme');
  }
}

function updataThemeVideoContainer() {
  if (savedTheme === 'dark-theme' && modalVideoContainer) {
    modalVideoContainer.classList.add('dark-theme');
  }
}
