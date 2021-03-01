const getGithubUser = (username) => (
  username ? (
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        console.log(`GitAPI Request Limit: ${response.headers.get('x-ratelimit-used')}/${response.headers.get('x-ratelimit-limit')} (Resets ${new Date(1000*response.headers.get('x-ratelimit-reset'))})`);
        return response.json();
      })
  )
  : ''
);

export { getGithubUser };