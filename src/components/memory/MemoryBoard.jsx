import { MemoryCard } from "./MemoryCard";
import { useMemory } from "./MemoryProvider";
import { Typography } from "../atom/Typography";

export const MemoryBoard = () => {
  const { cards, returnCard } = useMemory();

  if (!cards) {
    return (
      <Typography variant="body2">
        An error occurs, there is no board.
      </Typography>
    );
  }

  return (
    <div className="grid grid-cols-6 grid-rows-6 w-max gap-2">
      {cards?.map((card) => (
        <MemoryCard onClick={() => returnCard(card)} key={card.id} card={card}>
          {card.emoji}
        </MemoryCard>
      ))}
    </div>
  );
};
