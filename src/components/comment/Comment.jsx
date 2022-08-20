export const Comment = ({ username, comment }) => {
  return (
    <fieldset className="p-4 pt-2 rounded-md bg-paper border-opacity-25">
      <legend className="text-sm text-primary">{username}</legend>
      <p>{comment}</p>
    </fieldset>
  );
};
