import { getMovies } from './api/fetch-movie';
import { ID_URL, VIDEO_URL } from './api/api-vars';
import { movieId, removeAllEventListenersModal, addAllEventListenersModal} from './movie-modal';
import { startLoader, stopLoader } from './loader';

const refs = {
  modalTrailerIfraim: document.querySelector('.modal-video__trailer'),
  modalTrailer: document.querySelector('.backdrop-video'),
};

const { modalTrailerIfraim, modalTrailer } = refs;
let closeTrailerBtn;
let currentTrailerIframe = null; // Store reference to current iframe


async function fetchForMovieTrailers(movieId) {
  const url = `${ID_URL}${movieId}${VIDEO_URL}`;

  const response = await getMovies(url);

  return response.results;
}


export async function onTreilerBtnClick(e) {
  e.preventDefault();

  startLoader();
  
  videoFrameClean();

  removeAllEventListenersModal();

  await openVideo(movieId);

  if (modalTrailer) modalTrailer.classList.remove('modal-trailer--is-hidden');

  stopLoader();

  closeTrailerBtn = document.querySelector('.modal__close-btn');

  if (closeTrailerBtn) {
    closeTrailerBtn.addEventListener('click', closeModalTrailer);    
  }
  
  if (modalTrailer) {
    modalTrailer.addEventListener('click', onTrailerBackdropClick);
  }
  
  window.addEventListener('keydown', onKeydownEscape);
}



const BASE_TREILER_URL = 'https://www.youtube.com/embed/';

async function openVideo(id) {
  const result = await fetchForMovieTrailers(id);
  if (result && result[0] && modalTrailerIfraim) {
    const key = result[0].key;
    await videoFrameCreate(key);
  } else if (modalTrailerIfraim) {
    modalTrailerIfraim.innerHTML = `<p class="modal-video__error">Trailer not found!</p>`;
  }
}

function videoFrameCreate(key) {
  if (!modalTrailerIfraim) return;
  
  const trailer = `
    <iframe 
    width="100%" 
    height="100%"  
   src="${BASE_TREILER_URL}${key}" 
   title="YouTube video player" 
   frameborder="0" 
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
   allowfullscreen>
   </iframe>
 `;
  modalTrailerIfraim.insertAdjacentHTML('beforeend', trailer);
  
 
  currentTrailerIframe = modalTrailerIfraim.querySelector('iframe');
}

function videoFrameClean() {
  if (modalTrailerIfraim) {
  
    if (currentTrailerIframe) {
    
      currentTrailerIframe.src = '';
      currentTrailerIframe = null;
    }
    modalTrailerIfraim.innerHTML = '';
  }
}

export function closeModalTrailer() {
  if (currentTrailerIframe) {
    currentTrailerIframe.src = '';
    currentTrailerIframe = null;
  }
  
  addAllEventListenersModal();
  removeAllEventListenersTrailer();
  if (modalTrailer) modalTrailer.classList.add('modal-trailer--is-hidden');
}

function onTrailerBackdropClick(e) {
  if (!e.target.classList.contains('backdrop-video')) {
    return;
  }
  
  if (currentTrailerIframe) {
    currentTrailerIframe.src = '';
    currentTrailerIframe = null;
  }
  
  addAllEventListenersModal();
  removeAllEventListenersTrailer();
  if (modalTrailer) modalTrailer.classList.add('modal-trailer--is-hidden');
}


function onKeydownEscape(e) {
  e.preventDefault();
  if (e.code !== 'Escape') {
    return;
  }
  
  if (currentTrailerIframe) {
    currentTrailerIframe.src = '';
    currentTrailerIframe = null;
  }
  
  addAllEventListenersModal();
  removeAllEventListenersTrailer();
  modalTrailer.classList.add('modal-trailer--is-hidden');
}

function removeAllEventListenersTrailer() {
  if (closeTrailerBtn) closeTrailerBtn.removeEventListener('click', closeModalTrailer);    
  if (modalTrailer) modalTrailer.removeEventListener('click', onTrailerBackdropClick);
  window.removeEventListener('keydown', onKeydownEscape);
}
