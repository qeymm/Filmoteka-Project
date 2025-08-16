import icons from '../../images/symbol-defs.svg';

export const logregMarkup = `<div id="login-status" class="login-status">
        <button id="tosignin"  type="button" class="fbs__nav-btn">log in</button>
        <button id="tosignup"  type="button" class="fbs__nav-btn sign-up">
                <svg class="login-status-icon" width="18" height="18">
          <use href="${icons}#person-black-18dp"></use>
        </svg>
        sign up</button>
      </div>`;

export const loggedMarkup = `<div id="login-status" class="login-status">
        <span id="logged-user"></span>
        <button id="logout"  type="button" class="fbs__nav-btn">logout</button>
        
        <!-- Logout Success Message -->
        <div id="logout-success" class="fbs-success-message">
          <div class="fbs-success-icon">👋</div>
          <h3 class="fbs-success-text">Successfully Logged Out!</h3>
          <p class="fbs-success-subtext">Come back soon!</p>
        </div>
      </div>`;

export const loginMarkup = `<div id="user-login" class="backdrop fbs-backdrop">
        <div class="fbs-modal">
<button id="close-backdrop"  type="button" class="fbs-modal-close-btn"><svg
            width="40"
            height="40"
            aria-label="close the mobile menu"
          >
            <use
              class="menu-btn__icon--close"
              href="${icons}#icon-close"
            ></use>
          </svg></button>

            <p class="fbs-modal-title">Sign in with email</p>
        
        <form id="login-form" class="fbs-modal-form">
        <div class="fbs-modal-content">
          <label for="email" class="fbs-modal-label">Email: </label>
          <span class="fbs-modal-label__field">
            <input type="email" name="email" required 
              placeholder="email@address.com"
              class="fbs-modal-label__block fbs-modal-label__block--input"/>
              <svg class="fbs-modal-icon" width="18" height="18">
                <use href="${icons}#email-black-18dp"></use>
              </svg>
          </span>
          <label for="password" class="fbs-modal-label">Password: </label>
          <span class="fbs-modal-label__field">
            <input type="password" name="password" minlength="6" required 
              placeholder="(A-Z, a-z, 0-9, !@_-  min 6 symbols)"
              class="fbs-modal-label__block fbs-modal-label__block--input"/>
              <svg class="fbs-modal-icon" width="18" height="18">
                <use href="${icons}#person-black-18dp"></use>
              </svg>
          </span>
          <button type="submit" id="fire" value="log" class="btn fbs-modal-btn--submit">Login</button>
          <p id="login-error"></p>
          </div>
          <a class="visually-hidden fbs-forgot" href="#">Forgot Password?</a>
        </form>

        <!-- Success Message -->
        <div id="login-success" class="fbs-success-message">
          <div class="fbs-success-icon">✓</div>
          <h3 class="fbs-success-text">Successfully Logged In!</h3>
          <p class="fbs-success-subtext">Welcome back! Redirecting you now...</p>
        </div>

        </div>
      </div>`;

export const registerMarkup = `<div id="user-register" class="backdrop fbs-backdrop">
          <div class="fbs-modal">
<button id="close-backdrop" type="button" class="fbs-modal-close-btn"><svg
            width="40"
            height="40"
            aria-label="close the mobile menu"
          >
            <use
              class="menu-btn__icon--close"
              href="${icons}#icon-close"
            ></use>
          </svg></button>

        <p class="fbs-modal-title">Sign up with email</p>
        
        <form id="signup-form" class="fbs-modal-form">
        <div class="fbs-modal-content">
          <label for="email" class="fbs-modal-label">Email: </label>
          <span class="fbs-modal-label__field">
            <input type="email" name="email" required 
              placeholder="email@address.com"
              class="fbs-modal-label__block fbs-modal-label__block--input"/>
              <svg class="fbs-modal-icon" width="18" height="18">
                <use href="${icons}#email-black-18dp"></use>
              </svg>
          </span>
          <label for="password" class="fbs-modal-label">Password:</label>
          <span class="fbs-modal-label__field">
            <input type="password" name="password" minlength="6" required 
              placeholder="(A-Z, a-z, 0-9, !@_-   min 6 symbols)"
              class="fbs-modal-label__block fbs-modal-label__block--input"/>
              <svg class="fbs-modal-icon" width="18" height="18">
                <use href="${icons}#person-black-18dp"></use>
              </svg>
          </span>
          <button type="submit" id="fire" value="reg" class="btn fbs-modal-btn--submit">Sign up</button>
          <p id="login-error"></p>
          </div>
                  </form>

                  <!-- Success Message -->
                  <div id="register-success" class="fbs-success-message">
                    <div class="fbs-success-icon">✓</div>
                    <h3 class="fbs-success-text">Account Created Successfully!</h3>
                    <p class="fbs-success-subtext">Welcome to Filmoteka! Redirecting you now...</p>
                  </div>

                  <p class="policy-text">
  By continuing, you are indicating that you accept our
  <a
    href="https://www.termsfeed.com/live/a4a90d1f-3dbd-4a5f-8d9b-f11bd7c44a8a"
    target="_blank"
    rel="noreferrer noopener nofollow"
    aria-label="Terms"
    class="policy-link"
    >Terms of Service</a
  >
  and
  <a
    href="https://www.termsfeed.com/live/3410472a-4627-47f2-9940-040bfb0a9dca"
    target="_blank"
    rel="noreferrer noopener nofollow"
    aria-label="Policy"
    class="policy-link"
    >Privacy Policy</a
  >.
</p>
        </div>
      </div>`;
