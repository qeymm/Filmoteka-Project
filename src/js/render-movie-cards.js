import { getMovies } from './api/fetch-movie';
import { createMovieMarkup } from './create-movie-markup';
import { TREND_DAY_URL } from './api/api-vars';
import { renderPagination } from './pagination';
import { startLoader, stopLoader } from './loader';

const gallery = document.querySelector('.gallery');

startLoader();

(async () => {
  try {
    // Request exactly 9 movies for the 3x3 grid
    const trendMoviesList = await getMovies(`${TREND_DAY_URL}&page=1&per_page=9`);
    
    if (trendMoviesList && trendMoviesList.results) {
      await renderMovieCards(trendMoviesList.results);
      localStorage.setItem('LAST_REQUESTED_URL', `${TREND_DAY_URL}&page=1&per_page=9`);
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
