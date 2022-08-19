import { useEffect, useState } from "react";

const Home = () => {
  const [comments, setComments] = useState();

  useEffect(() => {
    fetch("api/hello")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setComments(data);
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const value = {
      comment: e.target.comment.value,
      username: e.target.username.value,
    };

    fetch("api/hello", { method: "POST", body: JSON.stringify(value) });
  };

  return (
    <div>
      {comments?.map((comment) => (
        <div key={comment.id}>
          <p>{comment.username}</p>
          <p>{comment.comment}</p>
        </div>
      ))}
      <form onSubmit={onSubmit}>
        <input type="text" id="username" placeholder="username" />
        <input type="text" id="comment" placeholder="comment" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
