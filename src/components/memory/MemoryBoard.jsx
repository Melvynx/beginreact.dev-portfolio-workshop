import { MemoryCard } from "./MemoryCard";
import { useMemory } from "./MemoryProvider";

export const MemoryBoard = () => {
  const { cards, returnCard } = useMemory();

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
