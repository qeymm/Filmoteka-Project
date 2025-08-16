import { renderMovieCards } from './render-movie-cards';
import { getMovies } from './api/fetch-movie';
import { API_KEY, BASE_URL } from './api/api-vars';
import { paginationWrapRef } from './pagination';
import { startLoader, stopLoader } from './loader';
import { showSlider } from './slider';

const refs = {
  btnToday: document.querySelector('button[data-group="today"]'),
  filterBg: document.querySelector('.background__filter'),
  btnWeek: document.querySelector('button[data-group="week"]'),
  gallery: document.querySelector('.gallery'),
  form: document.querySelector('.header__form'),
  filter: document.querySelector('.filter'),
  toTrendingBtn: document.querySelector('.to-trending__button'),
  failSearchText: document.querySelector('.not-succesful-search-text'),
};

export const {
  btnToday,
  filterBg,
  btnWeek,
  gallery,
  form,
  filter,
  toTrendingBtn,
  failSearchText,
} = refs;
let anchorNodeToday = btnToday.parentNode.parentNode;
let anchorNodeWeek = btnWeek.parentNode.parentNode;

let page = 1;

// Only add event listeners if elements exist
if (toTrendingBtn) {
  toTrendingBtn.addEventListener('click', toTrendingBtnClick);
}

if (btnToday) {
  btnToday.addEventListener('click', async () => {
    const currentPageElement = document.querySelector('.pagination-button--current');
    page = currentPageElement ? currentPageElement.dataset.page : 1;
    const TREND_URL_DAY = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
    if (anchorNodeToday.classList.contains('.selected')) {
      return;
    } else {
      startLoader();
      anchorNodeToday.classList.add('.selected');
      anchorNodeWeek.classList.remove('.selected');
      if (filterBg) filterBg.classList.remove('to-right');
      localStorage.setItem('LAST_REQUESTED_URL', TREND_URL_DAY);
      await renderMovies(TREND_URL_DAY + `&page=${page}`);
      setTimeout(() => {
        stopLoader();
      }, 200);
    }
  });
}

if (btnWeek) {
  btnWeek.addEventListener('click', async () => {
    const currentPageElement = document.querySelector('.pagination-button--current');
    page = currentPageElement ? currentPageElement.dataset.page : 1;
    const TREND_URL_WEEK = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`;
    if (anchorNodeWeek.classList.contains('.selected')) {
      return;
    } else {
      startLoader();
      anchorNodeToday.classList.remove('.selected');
      anchorNodeWeek.classList.add('.selected');
      if (filterBg) filterBg.classList.add('to-right');
      localStorage.setItem('LAST_REQUESTED_URL', TREND_URL_WEEK);
      await renderMovies(TREND_URL_WEEK + `&page=${page}`);
      setTimeout(() => {
        stopLoader();
      }, 200);
    }
  });
}

export function renderMovies(url) {
  getMovies(url).then(response => {
    if (response && response.results) {
      renderMovieCards(response.results);
    }
  }).catch(error => {
    console.error('Error rendering movies:', error);
  });
}

export async function toTrendingBtnClick() {
  const currentPageElement = document.querySelector('.pagination-button--current');
  page = currentPageElement ? currentPageElement.dataset.page : 1;

  const TREND_URL_DAY = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;

  showSlider();
  if (filter) filter.classList.remove('is-hidden');
  if (toTrendingBtn) toTrendingBtn.classList.add('is-hidden');
  if (form) form.reset();

  if (anchorNodeWeek.classList.contains('.selected')) {
    return;
  } else {
    startLoader();
    anchorNodeWeek.classList.remove('.selected');
    anchorNodeToday.classList.add('.selected');
    if (filterBg) filterBg.classList.remove('to-right');
    localStorage.setItem('LAST_REQUESTED_URL', TREND_URL_DAY);
    await renderMovies(TREND_URL_DAY + `&page=${page}`);
    if (paginationWrapRef) paginationWrapRef.classList.remove('visually-hidden');
    if (failSearchText) failSearchText.classList.add('visually-hidden');
    setTimeout(() => {
      stopLoader();
    }, 200);
  }
}
