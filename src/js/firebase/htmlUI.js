import { getAuth, onAuthStateChanged } from 'firebase/auth';

import {
  logregMarkup,
  registerMarkup,
  loginMarkup,
  loggedMarkup,
} from './htmlMarkup';

import {
  logUser,
  logOut,
  createNote,
  readNote,
  createNewUser,
} from './firebaseAuth';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

import {} from '@firebase/util';

// hrefs
const hrefAuthHeaderHtml = document.getElementById('auth-header');
const hrefModalHtml = document.getElementById('auth-modal');

async function onLoginBtn(e) {
  e.preventDefault();
  const password = e.target.password.value;
  const email = e.target.email.value;
  const action = e.target.fire.value;
  if (action === 'log') {
    const myUser = await logUser(email, password);

    if (myUser.uid) {
      cleanLoginModal();

      const auth = getAuth();
      onAuthStateChanged(auth, myUser => {
        if (myUser) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = myUser.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });

      const dbNote = await readNote(myUser);

      const watched = dbNote.watched;
      const queue = dbNote.queue;

      if (watched) {
        localStorage.setItem('watched', watched);
      }
      if (queue) {
        localStorage.setItem('queue', queue);
      }

      makeLoggedHtml(myUser.email);
    } else {
      const loginErrorElement = document.getElementById('login-error');
      if (loginErrorElement) {
        loginErrorElement.innerText = ` ${myUser
          .replace('auth/', '')
          .replaceAll('-', '  ')}, check your email and try again or signup! `;
      }
    }
  } else {
    const createdUser = await createNewUser(email, password);

    if (createdUser.uid) {
      const myUser = await logUser(email, password);
      const queue = localStorage.getItem('queue') || [];
      const watched = localStorage.getItem('watched') || [];

      await createNote(createdUser, queue, watched);
      cleanLoginModal();

      makeLoggedHtml(myUser.email);
    } else {
      const loginErrorElement = document.getElementById('login-error');
      if (loginErrorElement) {
        loginErrorElement.innerText = ` ${createdUser
          .replace('auth/', '')
          .replaceAll('-', '  ')}, try to signin instead! `;
      }
    }
  }
}

async function onLogoutBtn(e) {
  e.target.removeEventListener('click', onLogoutBtn);

  await logOut();
  makeLogRegHtml();
}

function cancelLogin(e) {
  cleanLoginModal();
  makeLogRegHtml();
}

export function makeLogRegHtml() {
  if (hrefAuthHeaderHtml) {
    hrefAuthHeaderHtml.innerHTML = logregMarkup;
  }
  const container = document.getElementById('login-status');
  const signin = document.getElementById('tosignin');
  const signup = document.getElementById('tosignup');
  if (signin) signin.addEventListener('click', onSignButton);
  if (signup) signup.addEventListener('click', onSignButton);
}

export function makeLoggedHtml(loggedUser) {
  if (hrefAuthHeaderHtml) {
    hrefAuthHeaderHtml.innerHTML = loggedMarkup;
  }
  const loggedUserElement = document.getElementById('logged-user');
  if (loggedUserElement) loggedUserElement.innerText = ''; // logged
  const logoutElement = document.getElementById('logout');
  if (logoutElement) logoutElement.addEventListener('click', onLogoutBtn);
}

function onSignButton(e) {
  const tosignin = document.getElementById('tosignin');
  const tosignup = document.getElementById('tosignup');
  
  if (tosignin) {
    tosignin.removeEventListener('click', onSignButton);
  }

  if (tosignup) {
    tosignup.removeEventListener('click', onSignButton);
  }

  if (e.target === tosignin) {
    makeLoginModalHtml();
    const { closeBackdrop, form, fbsBackdrop } = getElementsLoginModal();
    if (closeBackdrop) closeBackdrop.addEventListener('click', cancelLogin);
    if (fbsBackdrop) fbsBackdrop.addEventListener('click', fbsClose);
    if (form) form.addEventListener('submit', onLoginBtn);
  } else {
    makeRegisterModalHtml();
    const { closeBackdrop, form, fbsBackdrop } = getElementsLoginModal();
    if (closeBackdrop) closeBackdrop.addEventListener('click', cancelLogin);
    if (fbsBackdrop) fbsBackdrop.addEventListener('click', fbsClose);
    if (form) form.addEventListener('submit', onLoginBtn);
  }
}

// LoginModal part

function getElementsLoginModal() {
  const modal = document.getElementById('auth-modal');
  const fbsBackdrop = document.querySelector('.fbs-backdrop');
  const closeBackdrop = document.getElementById('close-backdrop');
  const signup = document.getElementById('signup');
  const signin = document.getElementById('signin');
  const form =
    document.getElementById('login-form') ||
    document.getElementById('signup-form');
  return { modal, closeBackdrop, signup, signin, form, fbsBackdrop };
}

function cleanLoginModal() {
  const { modal, closeBackdrop, form, fbsBackdrop } = getElementsLoginModal();

  if (fbsBackdrop) fbsBackdrop.removeEventListener('click', fbsClose);
  if (closeBackdrop) closeBackdrop.removeEventListener('click', cancelLogin);

  if (form) {
    form.removeEventListener('submit', onLoginBtn);
    form.reset();
  }
  
  if (modal) modal.innerHTML = '';
}

function makeLoginModalHtml() {
  if (hrefModalHtml) {
    hrefModalHtml.innerHTML = loginMarkup;
  }
}

function makeRegisterModalHtml() {
  if (hrefModalHtml) {
    hrefModalHtml.innerHTML = registerMarkup;
  }
}

function fbsClose(e) {
  if (e.target === e.currentTarget) {
    cancelLogin();
  }
}
