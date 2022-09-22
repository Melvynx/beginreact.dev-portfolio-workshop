import { TextField } from "../atom/TextField";
import { Button } from "../atom/Button";

export const CommentForm = () => {
  // Commentaire - Exercise
  return (
    <form className="flex flex-col gap-4 w-full md:px-8">
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
      <Button type="submit">Submit</Button>
    </form>
  );
};
