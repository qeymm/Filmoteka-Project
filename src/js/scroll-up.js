// scroll to top
const toTopBtn = document.getElementById('myBtn');

window.onscroll = function () {
  scrollFunction();
};

export function scrollFunction() {
  if (!toTopBtn) return;
  
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopBtn.style.display = 'block';
    toTopBtn.addEventListener('click', topFunction);
  } else {
    toTopBtn.style.display = 'none';
  }
}

export function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
