import Debouncer from '../debouncer.js';

const showRateLimit = (headers, endpoint) => {
  console.log(`GitAPI Request Limit for ${endpoint}: ${headers.get('x-ratelimit-used')}/${headers.get('x-ratelimit-limit')} (Resets ${new Date(1000*headers.get('x-ratelimit-reset'))})`);
};

const getGithubUser = (username) => (
  username ? (
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        console.log(response);
        showRateLimit(response.headers, '/users');
        return response.json();
      })
  )
  : ''
);

// const searchGithubUser = new Debouncer(
//   500,
//   (partialUsername) => (
//     partialUsername ? (
//       fetch(`https://api.github.com/search/users?q=${partialUsername}+type:user+in:login&per_page=5`)
//         .then((response) => {
//           console.log(`GitAPI Search Limit: ${response.headers.get('x-ratelimit-used')}/${response.headers.get('x-ratelimit-limit')} (Resets ${new Date(1000*response.headers.get('x-ratelimit-reset'))})`);
//           return response.json().items.map((user) => user.login);
//         })
//     )
//     : ''
//   )
// );

const searchGithubUser = new Debouncer(
  500,
  (partialUsername) => (
    partialUsername ? (
      new Promise((resolve, reject) => {
        resolve([`You searched for "${partialUsername}"`]);
      })
    )
    : ['Nothing was searched...']
  )
);

export { getGithubUser, searchGithubUser };