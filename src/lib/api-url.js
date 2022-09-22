/**
 * To get all stargazed repositories of a user
 *
 * @param username string Your username
 * @returns {`/api/pinnedGithubRepository?username=${string}`}
 */
export const getListOfUrlRepositoriesUrl = (username) => {
  return `/api/pinnedGithubRepository?username=${username}`;
};

/**
 * To get all comment use the "GET" method
 *
 * To add a new comment use the "POST" method with the following body:
 * { username: "...", comment: "..." }
 *
 * @type {string}
 */
export const commentsUrl = "api/comments";
