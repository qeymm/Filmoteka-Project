import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, child } from 'firebase/database';

import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserSessionPersistence,
} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBbimgzf3jwfOpmEGxEe2-A8GsMsobk9DI",
    authDomain: "filmoteka-ba48e.firebaseapp.com",
    projectId: "filmoteka-ba48e",
    storageBucket: "filmoteka-ba48e.firebasestorage.app",
    messagingSenderId: "36390559870",
    appId: "1:36390559870:web:dee6c791d47e73219e382f"
  };

// Check if Firebase is configured
// if (firebaseConfig.apiKey === 'AIzaSyBbimgzf3jwfOpmEGxEe2-A8GsMsobk9DI') {
//   console.warn('⚠️ Firebase configuration not set up. Please configure Firebase in src/js/firebase/firebaseAuth.js');
//   console.warn('⚠️ Authentication and database functionality will not work without proper Firebase configuration');
// }

export function connectToBD() {
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}

export async function createNewUser(email, password) {
  const auth = getAuth();

  return await createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      // ...
      return user;
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..

      return errorCode;
    });
}

// auth
export async function logUser(email, password) {
  const auth = getAuth();
  setPersistence(auth, browserSessionPersistence);
  return await signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;

      return user;
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

      return errorCode;
    });
}

export async function watchUser(user) {
  const auth = getAuth();
  return await onAuthStateChanged(auth, user => {
    if (user) {
      // User is signed in, seeregister docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      return user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}

// logout
export async function logOut() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch(error => {
      // An error happened.
    });
}

// CRUD

export async function createNote(user, queue, watched) {
  const database = getDatabase();
  await set(ref(database, 'galleries/' + user.uid), {
    queue,
    watched,
  });
}

export async function readNote(user) {
  const dbRef = ref(getDatabase());
  return await get(child(dbRef, `galleries/${user.uid}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        return data;
      } else {
      }
      return snapshot.val();
    })
    .catch(error => {});
}
//
//function updateNote() {}
//
//function deleteNote() {}
//
