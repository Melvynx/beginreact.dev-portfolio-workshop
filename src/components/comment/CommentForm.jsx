import { TextField } from "../atom/TextField";
import { Button } from "../atom/Button";
import { useState } from "react";

export const CommentForm = ({ onSubmit }) => {
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    console.log(form);
    const username = event.currentTarget.username.value;
    const comment = event.currentTarget.comment.value;

    onSubmit({ username, comment })
      .then(() => {
        form.reset();
        setError(null);
      })
      .catch((error) => {
        if (error) {
          setError(error);
        }
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full md:px-8"
    >
      <TextField
        label="Commentaire"
        id="username"
        type="text"
        placeholder="Username"
      />

      <TextField
        label="Username"
        id="comment"
        type="text"
        placeholder="Username"
        component="textarea"
      />
      {error && <div className="text-red-500">{error}</div>}

      <Button type="submit">Submit</Button>
    </form>
  );
};
