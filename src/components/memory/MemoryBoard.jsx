import { Typography } from "../atom/Typography";

export const MemoryBoard = () => {
  // Memory Game - Exercise
  const cards = [];

  if (!cards) {
    return (
      <Typography variant="body2">
        An error occurs, there is no board.
      </Typography>
    );
  }

  return (
    <div className="grid grid-cols-6 grid-rows-6 w-max gap-2">
      {/* Memory Game - Exercise */}
    </div>
  );
};
