export const getListOfRepositories = async (username) =>
  fetch(`https://api.github.com/users/${username}/repos`).then((response) =>
    response.json()
  );
