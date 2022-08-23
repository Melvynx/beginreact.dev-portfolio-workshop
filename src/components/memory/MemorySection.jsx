import { MemoryBoard } from "./MemoryBoard";
import { Typography } from "../atom/Typography";
import { MemoryContextProvider, useMemory } from "./MemoryProvider";
import { SectionWrapper } from "../atom/SectionWrapper";
import { Button } from "../atom/Button";

export const MemorySection = () => {
  return (
    <SectionWrapper title="You're boring ? Let's play a game !">
      <MemoryContextProvider>
        <div className="flex flex-col gap-14 items-center">
          <div className="flex flex-col gap-2 items-center">
            <CurrentScore />
            <MemoryBoard />
            <ResetButton />
          </div>
        </div>
      </MemoryContextProvider>
    </SectionWrapper>
  );
};

const CurrentScore = () => {
  const { score, isFinish } = useMemory();

  if (isFinish) {
    return (
      <Typography variant="body2 underline">
        You <b>finished</b> the memory in {score} times !
      </Typography>
    );
  }

  return <Typography variant="body2">You try {score} times.</Typography>;
};

const ResetButton = () => {
  const { reset } = useMemory();

  return <Button onClick={reset}>Reset</Button>;
};
