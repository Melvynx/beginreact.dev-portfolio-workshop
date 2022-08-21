import { createContext, useContext, useEffect, useState } from "react";
import {
  CARD_STATE,
  getInitialMemory,
  isMemoryFinished,
  isPairCards,
} from "../../lib/memory";

const MemoryContext = createContext();

export const useMemory = () => {
  const context = useContext(MemoryContext);
  if (!context) {
    throw new Error("Memory is not initialized");
  }
  return context;
};

export const MemoryContextProvider = ({ children }) => {
  const [cards, setCards] = useState(() => getInitialMemory());
  const [score, setScore] = useState(0);

  const returnCard = (returnedCard) => {
    if (returnedCard.state !== CARD_STATE.HIDE) {
      return;
    }

    const returnedCards = cards.filter((c) => c.state === CARD_STATE.RETURNED);

    if (
      returnedCards?.length === 2 ||
      returnedCards?.includes(returnedCard.id)
    ) {
      return;
    }

    const newCards = cards.map((card) => {
      if (returnedCard.id === card.id) {
        card.state = CARD_STATE.RETURNED;
        returnedCards.push(card);
        return card;
      }
      return card;
    });

    setCards(newCards);
  };

  useEffect(() => {
    const returnedCards = cards.filter((c) => c.state === CARD_STATE.RETURNED);

    if (returnedCards.length !== 2) {
      return;
    }

    const isPair = isPairCards(returnedCards[0], returnedCards[1]);

    setTimeout(
      () => {
        if (isPair && isMemoryFinished(cards)) {
          console.log("MEMORY IS FINISH");
        }

        setCards((prev) =>
          prev.map((card) => {
            if (
              card.state === CARD_STATE.RETURNED &&
              returnedCards.includes(card)
            ) {
              card.state = isPair ? CARD_STATE.FIND : CARD_STATE.HIDE;
            }
            return card;
          })
        );

        if (isPair) {
          setScore((prev) => prev + 1);
        }
      },
      isPair ? 400 : 1000
    );
  }, [cards]);

  return (
    <MemoryContext.Provider value={{ cards, returnCard, score: score }}>
      {children}
    </MemoryContext.Provider>
  );
};
