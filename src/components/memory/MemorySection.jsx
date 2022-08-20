import { MemoryBoard } from "./MemoryBoard";
import { Typography } from "../atom/Typography";
import { MemoryContextProvider, useMemory } from "./MemoryProvider";

export const MemorySection = () => {
  return (
    <MemoryContextProvider>
      <div className="flex flex-col gap-14 items-center">
        <Typography id={"memory"} variant="h2">
          You're boring ? Let's play a game !
        </Typography>
        <Typography id={"memory-description"} variant="body1">
          Memory is a memory game where you have to find the matching cards.
        </Typography>
        <div className="flex flex-col gap-2 items-center">
          <CurrentScore />
          <MemoryBoard />
        </div>
      </div>
    </MemoryContextProvider>
  );
};

const CurrentScore = () => {
  const { score } = useMemory();

  return <Typography variant="body2">You try {score} times.</Typography>;
};
