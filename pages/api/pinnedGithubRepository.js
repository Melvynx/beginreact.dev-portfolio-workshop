const handler = async (req, res) => {
  const username = req.query.username;

  const query = `
  {
    user(login: "${username}") {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            url
            stargazerCount
            homepageUrl
          }
        }
      }
    }
  }
  `;
  const response = await fetch(`https://api.github.com/graphql`, {
    method: "POST",
    headers: {
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  }).then((r) => r.json());

  res.status(200);
  res.json(response.data.user.pinnedItems.nodes);
};

export default handler;
