import Debouncer from '../debouncer.js';

const howLong = (timestamp) => {
  const diff = timestamp - new Date().getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const mins = Math.floor(diff / (1000 * 60)) % 60;
  const secs = Math.floor(diff / (1000)) % 60;
  return `${hours}hrs ${mins}min ${secs}s`;
}

const showRateLimit = (headers, endpoint) => {
  console.log(`${endpoint} limit: ${headers.get('x-ratelimit-used')}/${headers.get('x-ratelimit-limit')}\n(Resets in ${howLong(1000*headers.get('x-ratelimit-reset'))})`);
};

const getGithubUser = (username) => (
  username ? (
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        showRateLimit(response.headers, '/users');
        switch (response.status) {
          case 200: return response.json();
          case 403: return {
            name: 'Failed to load profile',
            login: 'Too many requests',
            bio: 'Try again in '+howLong(1000*response.headers.get('x-ratelimit-reset')).split(' ').slice(1).join(' '),
            avatar_url: 'https://via.placeholder.com/150',
          };
          default: return {
            name: 'HTTP GET Error:',
            login: response.status,
            bio: 'Your request couldn\'t be handled, please try again later',
            avatar_url: 'https://via.placeholder.com/150',
          };
        }
      })
  )
  : {}
);

const searchGithubUser = new Debouncer(
  500,
  (partialUsername) => (
    partialUsername ? (
      fetch(`https://api.github.com/search/users?q=${partialUsername}+type:user+in:login&per_page=5`)
        .then((response) => {
          showRateLimit(response.headers, '/search');
          switch (response.status) {
            case 200: return response.json();
            case 403: return 'Failed to load suggestions, try again in '+howLong(1000*response.headers.get('x-ratelimit-reset')).split(' ')[2];
            default: return `Error ${response.status}`;
          }
        })
        .then((data) => data instanceof Object ? data.items.map((user) => user.login) : [data])
    )
    : []
  )
);

export { getGithubUser, searchGithubUser };