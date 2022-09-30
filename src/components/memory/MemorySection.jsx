import { Button } from '../atom/Button';
import { SectionWrapper } from '../atom/SectionWrapper';
import { Typography } from '../atom/Typography';
import { MemoryBoard } from './MemoryBoard';
import { MemoryContextProvider, useMemory } from './MemoryProvider';

export const MemorySection = () => {
  return (
    <SectionWrapper title="You're boring ? Let's play a game !">
      <MemoryContextProvider>
        <div className="flex flex-col items-center gap-14">
          <div className="flex flex-col items-center gap-2">
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
  const { tryCount, isFinish } = useMemory();

  if (isFinish) {
    return (
      <Typography variant="body2 underline">
        You <b>finished</b> the memory in {tryCount} times !
      </Typography>
    );
  }

  return <Typography variant="body2">You try {tryCount} times.</Typography>;
};

const ResetButton = () => {
  const { reset, tryCount } = useMemory();

  return (
    <Button disabled={tryCount === 0} onClick={reset}>
      Reset
    </Button>
  );
};
