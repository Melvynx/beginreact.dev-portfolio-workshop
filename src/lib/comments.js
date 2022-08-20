/**
 * Get list of all comments.
 * @param signal AbortSignal for cancelling the request.
 * @returns {Promise<{id: string, username: string, comment: string, createdAt: string}>}
 */
export const getComments = (signal) =>
  fetch("api/comments", { signal }).then((res) => {
    return res.json();
  });

/**
 * Add a comment in the notion database
 * @param comment string
 * @param signal AbortSignal for cancelling the request.
 * @returns {Promise<{error: string}>}
 */
export const addComment = (comment, signal) =>
  fetch("api/comments", {
    method: "POST",
    body: JSON.stringify(comment),
    signal: signal,
  });
