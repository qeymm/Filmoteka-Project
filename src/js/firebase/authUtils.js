import { getAuth } from 'firebase/auth';
import { makeLogRegHtml } from './htmlUI';

/**
 * Wrapper function that checks if user is logged in before executing an action
 * @param {Function} action - The function to execute if user is logged in
 * @param {string} actionName - Human-readable name of the action for error messages
 * @returns {Function} - Wrapped function that checks authentication first
 */
export function requireLogin(action, actionName = 'this action') {
  return async function(...args) {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    
    if (!currentUser) {
      // User is not logged in, show login modal
      showLoginRequiredMessage(actionName);
      return false;
    }
    
    // User is logged in, execute the action
    try {
      return await action.apply(this, args);
    } catch (error) {
      console.error(`Error executing ${actionName}:`, error);
      return false;
    }
  };
}

/**
 * Shows a message that login is required and opens the Firebase modal
 * @param {string} actionName - Name of the action that requires login
 */
function showLoginRequiredMessage(actionName) {
  //temporary notification
  const notification = document.createElement('div');
  notification.className = 'login-required-notification';
  notification.setAttribute('role', 'alert');
  notification.setAttribute('aria-live', 'polite');
  notification.innerHTML = `
    <div class="notification-content">
      <p>🔐 Please log in to ${actionName}</p>
      <button class="notification-login-btn" aria-label="Open login modal">Log In Now</button>
    </div>
  `;
  
  // Add to DOM
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.classList.add('show');
  }, 100);
  
  // Auto-remove after 5 seconds
  setTimeout(() => {
    removeNotification();
  }, 5000);
  
  // Add click handler to open login modal
  const loginBtn = notification.querySelector('.notification-login-btn');
  loginBtn.addEventListener('click', () => {
    closeMovieModal();
    
    const signinBtn = document.getElementById('tosignin');
    if (signinBtn) {
      signinBtn.click();
    }
    removeNotification();
  });
  
  // Add keyboard support
  loginBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      loginBtn.click();
    }
  });
  
  function removeNotification() {
    notification.classList.remove('show');
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }
}

function closeMovieModal() {
  const movieModal = document.querySelector('.movie-backdrop');
  if (movieModal && !movieModal.classList.contains('movie-backdrop--is-hidden')) {
    // Remove modal-open class from body
    document.body.classList.remove('modal-open');
    
    // Hide the movie modal
    movieModal.classList.add('movie-backdrop--is-hidden');
    
    // Show scroll up button if it exists
    const toTopBtn = document.getElementById('myBtn');
    if (toTopBtn) {
      toTopBtn.style.display = 'block';
    }
  }
}

/**
 * Check if user is currently logged in
 * @returns {boolean} - True if user is logged in, false otherwise
 */
export function isUserLoggedIn() {
  const auth = getAuth();
  return auth.currentUser !== null;
}

/**
 * Get current user object
 * @returns {Object|null} - Current user object or null if not logged in
 */
export function getCurrentUser() {
  const auth = getAuth();
  return auth.currentUser;
}
