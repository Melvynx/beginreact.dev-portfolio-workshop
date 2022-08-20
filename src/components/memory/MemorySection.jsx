import { MemoryBoard } from "./MemoryBoard";
import { Typography } from "../atom/Typography";
import { MemoryContextProvider, useMemory } from "./MemoryProvider";
import { SectionWrapper } from "../atom/SectionWrapper";

export const MemorySection = () => {
  return (
    <SectionWrapper title="You're boring ? Let's play a game !">
      <MemoryContextProvider>
        <div className="flex flex-col gap-14 items-center">
          <div className="flex flex-col gap-2 items-center">
            <CurrentScore />
            <MemoryBoard />
          </div>
        </div>
      </MemoryContextProvider>
    </SectionWrapper>
  );
};

const CurrentScore = () => {
  const { score } = useMemory();

  return <Typography variant="body2">You try {score} times.</Typography>;
};
