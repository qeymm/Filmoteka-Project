// import axios from 'axios';
// import { startLoader, stopLoader } from './loader';
// import { slowScrollOnAddCards } from './infinity-scroll';
// import { options } from './infinity-scroll';
// import { scrollGuardRef } from './infinity-scroll';

// const regex = /[0-9]/g;
// const today = new Date().toISOString().slice(0, 10).match(regex).join('');
// const lastWeeksDate = getLastWeeksDate().match(regex).join('');
// let page = 0;
// let newsCountBySearch = 0;
// let newsCountStartOnPage = 0;
// // TODO: Insert your NYTimes API key. Get one at https://developer.nytimes.com/
// const NYT_API_KEY = 'YOUR_NYT_API_KEY_HERE';

// // Check if API key is configured
// if (NYT_API_KEY === 'YOUR_NYT_API_KEY_HERE') {
//   console.warn('⚠️ NYTimes API key not configured. Please get your API key from https://developer.nytimes.com/ and update the NYT_API_KEY variable in src/js/newsfeed-render.js');
//   console.warn('⚠️ News functionality will not work without a valid API key');
// }

// let NEWS_URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=movie&begin_date=${lastWeeksDate}&end_date=${today}&fq=Movies&sort=relevance&api-key=${NYT_API_KEY}`;
// const BASE_NEWS_IMG_URL = 'https://static01.nyt.com/';
// const newsfeedGallery = document.querySelector('.newsfeed');

// async function getNewsFeed(url, page) {
//   const urlWithPagePagination = `${url}&page=${page}`;

//   try {
//     const result = await axios.get(urlWithPagePagination);

//     return result.data.response;
//   } catch (error) {
//     console.error(error);
//   }
// }

// startLoader();

// getNewsFeed(NEWS_URL, page).then(newsArticles => {
//   if (newsArticles && newsArticles.docs) {
//     renderNews(newsArticles.docs);
//     updatePageCountVar(newsArticles);
//   } else {
//     console.warn('No news data received from API');
//     // Show a fallback message or placeholder
//   }
//   stopLoader();
// }).catch(error => {
//   console.error('Error loading news:', error);
//   stopLoader();
//   // Show a fallback message or placeholder
// });

// function renderNews(news) {
//   const newsFeedMarkup = news.map(item => createNewsCardMarkup(item)).join('');

//   newsfeedGallery.insertAdjacentHTML('beforeend', newsFeedMarkup);
// }

// function createNewsCardMarkup(newsItem) {
//   const {
//     byline: { original: author = 'Anonymous' },
//     pub_date: publishedAt,
//     headline: { main: title },
//     source: sourceName,
//     snippet: description,
//     web_url: url,
//     multimedia,
//     lead_paragraph: content,
//   } = newsItem;

//   const img = multimedia.find(item => /blog/.test(item.subtype));
//   let newsImg = '';

//   if (!img) {
//     newsImg = 'https://picsum.photos/400/300';
//   } else {
//     newsImg = BASE_NEWS_IMG_URL + img.url;
//   }

//   return `<li class="news-item-card">
//             <img class="news-item-image" src="${newsImg}" alt="${description}" loading="lazy">            
//             <div class="news-item-content-wrapper">
//                 <h2 class="news-item-title">${title}</h2>
//                 <p class="news-item-description"><b>Overview: </b>${description}</p>
//                 <p class="news-item-content">${content}</p>
//                 <a class="news-item-btn" href="${url}" target="_blank"><button type="button" class="news-btn">Read more</button></a>
//                 <div class="news-item-meta">
//                   <p class="news-item-source"><b>Source: </b>${sourceName}</p>
//                   <p class="news-item-author"><b>Author: </b>${author}</p>
//                   <p class="news-item-date"><b>Published At: </b>${publishedAt}</p>
//                 </div>
//             </div>
//           </li>`;
// }

// function getLastWeeksDate() {
//   const now = new Date();

//   return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7)
//     .toISOString()
//     .slice(0, 10);
// }

// // Infinity scroll

// const observer = new IntersectionObserver(getStartObserver, options);

// setTimeout(() => {
//   if (scrollGuardRef) {
//     observer.observe(scrollGuardRef);
//   }
// }, 1000);

// function getStartObserver(entries) {
//   entries.forEach(entry => {
//     if (newsCountBySearch <= newsCountStartOnPage) {
//       return;
//     }

//     if (entry.isIntersecting) {
//       page += 1;

//       startLoader();

//       getNewsFeed(NEWS_URL, page).then(newsArticles => {
//         renderNews(newsArticles.docs);
//         stopLoader();
//         updatePageCountVar(newsArticles);
//         slowScrollOnAddCards(newsfeedGallery);

//         if (newsCountBySearch <= newsCountStartOnPage) {
//           document
//             .querySelector('.end-scroll-text')
//             .classList.remove('is-hidden');
//           return;
//         }
//       });
//     }
//   });
// }

// function updatePageCountVar(newsArticles) {
//   newsCountBySearch = newsArticles.meta.hits;
//   newsCountStartOnPage = newsArticles.meta.offset + 10;
// }
