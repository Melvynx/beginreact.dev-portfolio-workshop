/**
 *
 * @param username string
 * @param signal AbortSignal for cancelling the request.
 * @returns {Promise<Response>}
 */
export const getListOfRepositories = async (username, signal) => {
  return fetch(`/api/pinnedGithubRepository?username=${username}`, {
    signal,
  }).then((r) => r.json());
};
