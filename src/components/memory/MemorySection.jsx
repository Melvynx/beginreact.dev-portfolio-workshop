import { MemoryBoard } from "./MemoryBoard";
import { MemoryContextProvider } from "./MemoryProvider";
import { SectionWrapper } from "../atom/SectionWrapper";
import { Button } from "../atom/Button";

export const MemorySection = () => {
  return (
    <SectionWrapper title="You're boring ? Let's play a game !">
      <MemoryContextProvider>
        <div className="flex flex-col gap-14 items-center">
          <div className="flex flex-col gap-2 items-center">
            <p>Score go here</p>
            <MemoryBoard />
            <Button>Reset go here</Button>
          </div>
        </div>
      </MemoryContextProvider>
    </SectionWrapper>
  );
};
