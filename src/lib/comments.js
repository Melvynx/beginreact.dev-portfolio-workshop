/**
 * Get list of all comments.
 * @returns {Promise<{id: string, username: string, comment: string, createdAt: string}>}
 */
export const getComments = () =>
  fetch("api/comments").then((res) => {
    return res.json();
  });

/**
 * Add a comment in the notion database
 * @param comment
 * @returns {Promise<{error: string}>}
 */
export const addComment = (comment) =>
  fetch("api/comments", { method: "POST", body: JSON.stringify(comment) });
