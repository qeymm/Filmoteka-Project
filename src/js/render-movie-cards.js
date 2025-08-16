import { getMovies } from './api/fetch-movie';
import { createMovieMarkup } from './create-movie-markup';
import { TREND_DAY_URL } from './api/api-vars';
import { renderPagination } from './pagination.js';
import { startLoader, stopLoader } from './loader';

const gallery = document.querySelector('.gallery');

startLoader();

(async () => {
  try {
    const trendMoviesList = await getMovies(TREND_DAY_URL);
    
    if (trendMoviesList && trendMoviesList.results) {
      await renderMovieCards(trendMoviesList.results);
      addAd();
      localStorage.setItem('LAST_REQUESTED_URL', TREND_DAY_URL);
      renderPagination(trendMoviesList.page, trendMoviesList.total_pages);
    } else {
      console.warn('No movie data received from API');
    }
  } catch (error) {
    console.error('Error loading trending movies:', error);
  } finally {
    stopLoader();
  }
})();

export function renderMovieCards(movies) {
  if (!movies || !Array.isArray(movies)) {
    console.warn('Invalid movies data provided to renderMovieCards');
    return;
  }
  
  const movieGalleryMarkup = movies
    .map(movie => createMovieMarkup(movie))
    .join('');

  if (gallery) {
    gallery.innerHTML = movieGalleryMarkup;
  } else {
    console.warn('Gallery element not found');
  }
}

export function addAd() {
  const gallery = document.querySelector('.gallery');
  if (!gallery) return;
  
  const adCard = `<li class="ad-card">
            <a class="gallery__link ad-card-link" href="#">
              <div class="gallery__image ad-card-content-wrapper">
                <p class="ad-title">Here you can place your ad</p>
                <div class="ad-content">
                  <p class="ad-text">Sell your car</br>Cheap</p>
                  <p class="ad-number">000-000-00-00</br>John Doe</p>
                </div>
              </div>
            </a>
          </li>`;

  gallery.insertAdjacentHTML('beforeEnd', adCard);
}

export function addAdCar() {
  const gallery = document.querySelector('.gallery');
  if (!gallery) return;
  
  const adCard = `<li class="ad-card">
            <a class="gallery__link ad-card-link" href="#">
              <div class="gallery__image ad-card-content-wrapper">
                <p class="ad-title">Here you can place your ad</p>
                <div class="ad-content">
                  <p class="ad-text">Sell your BMW X5</br>Not stolen</br>Not repainted</p>
                  <p class="ad-number">000-000-00-00</br>John Doe</p>
                </div>
              </div>
            </a>
          </li>`;

  gallery.insertAdjacentHTML('beforeEnd', adCard);
}

export function adRandomizer() {
  const gallery = document.querySelector('.gallery');
  if (!gallery) return;
  
  const random = Math.random() * (10 - 1) + 1;
  if (random >= 5) {
    addAd();
  } else {
    addAdCar();
  }
}
