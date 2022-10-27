import { createContext, useContext, useMemo, useState } from 'react';
import {
  CARD_STATE,
  getInitialMemory,
  isMemoryFinished,
  isPairCards,
} from '../../lib/memory';

const MemoryContext = createContext();

export const useMemory = () => {
  const context = useContext(MemoryContext);
  if (!context) {
    throw new Error('Memory is not initialized');
  }
  return context;
};

export const MemoryContextProvider = ({ children }) => {
  const [cards, setCards] = useState(() => getInitialMemory());
  const [tryCount, setTryCount] = useState(0);

  const isFinish = useMemo(() => isMemoryFinished(cards), [cards]);

  const returnCard = (returnedCard) => {
    if (returnedCard.state !== CARD_STATE.HIDE) {
      return;
    }

    const returnedCards = cards.filter((c) => c.state === CARD_STATE.RETURNED);

    if (returnedCards.length === 2 || returnedCards.includes(returnedCard.id)) {
      return;
    }

    setCards((current) =>
      current.map((card) => {
        if (returnedCard.id === card.id) {
          card.state = CARD_STATE.RETURNED;
          return card;
        }
        return card;
      })
    );

    if (returnedCards.length === 0) {
      return;
    }

    returnedCards.push(returnedCard);
    const isPair = isPairCards(returnedCards[0], returnedCards[1]);

    onCardChange(isPair, returnedCards);
  };

  const onCardChange = (isPair, returnedCards) => {
    setTimeout(
      () => {
        setCards((current) =>
          current.map((card) => {
            if (card.state === CARD_STATE.RETURNED && returnedCards.includes(card)) {
              card.state = isPair ? CARD_STATE.FIND : CARD_STATE.HIDE;
            }
            return card;
          })
        );

        setTryCount((prev) => prev + 1);
      },
      isPair ? 400 : 1000
    );
  };

  const reset = () => {
    setCards(getInitialMemory());
    setTryCount(0);
  };

  return (
    <MemoryContext.Provider value={{ cards, returnCard, tryCount, reset, isFinish }}>
      {children}
    </MemoryContext.Provider>
  );
};
