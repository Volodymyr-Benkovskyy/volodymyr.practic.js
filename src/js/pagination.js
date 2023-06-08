/* // https://jsonplaceholder.typicode.com/
import { JsonPlaceholderApi } from './jsonplaceholder-api';
import createPostsCards from '../templates/posts.hbs';

const postsContainerEl = document.querySelector('.js-posts');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const jsonPlaceholderApi = new JsonPlaceholderApi();

jsonPlaceholderApi
  .fetchPosts()
  .then(posts => {
    postsContainerEl.innerHTML = createPostsCards(posts);
  })
  .catch(err => {
    console.log(err);
  });

const onLoadMoreBtnClick = event => {
  jsonPlaceholderApi.page += 1;

  jsonPlaceholderApi
    .fetchPosts()
    .then(posts => {
      if (posts.length === 0) {
        loadMoreBtnEl.style.display = 'none';

        return;
      }

      postsContainerEl.insertAdjacentHTML('beforeend', createPostsCards(posts));

      // if (jsonPlaceholderApi.page === 5) {
      //   loadMoreBtnEl.style.display = 'none';
      // }
    })
    .catch(err => {
      console.log(err);
    });
};

loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
 */

// const { log } = require('handlebars/runtime');

/* ===== моя рообота ===== */

/*  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  }); */
import { JsonPlaceholderApi } from './jsonplaceholder-api';
import createPostsCards from '../templates/posts.hbs';

const postsContainerEl = document.querySelector('.js-posts');
const loadMoreBtnEl = document.querySelector('.js-load-more');

console.log(loadMoreBtnEl);

const jsonPlaceholderApi = new JsonPlaceholderApi();

jsonPlaceholderApi
  .fetchPosts()
  .then(posts => {
    postsContainerEl.innerHTML = createPostsCards(posts);
  })
  .catch(err => {
    console.log(err);
  });

const onLoadMoreBtnClick = event => {
  jsonPlaceholderApi.page += 1;

  jsonPlaceholderApi
    .fetchPosts()
    .then(posts => {
      if (jsonPlaceholderApi.page === 5) {
        loadMoreBtnEl.style.display = 'none';
      }
      postsContainerEl.insertAdjacentHTML('beforeend', createPostsCards(posts));
    })

    .catch(err => {
      console.log(err);
    });
};

loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
