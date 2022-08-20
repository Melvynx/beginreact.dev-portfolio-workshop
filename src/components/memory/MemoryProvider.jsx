import { createContext, useContext, useReducer, useState } from "react";
import {
  CARD_STATE,
  GAME_ACTION,
  GAME_STATUS,
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

const gameReducer = (state, action) => {
  switch (action.type) {
    case GAME_ACTION.ReturnCard:
      if (state.status === GAME_STATUS.WAIT_FOR_CLEAR) {
        return;
      }

      return {
        ...state,
        status: GAME_STATUS.WAITING_FOR_SECOND_CARD,
      };
    case GAME_ACTION.Clear:
      return {
        ...state,
        score: state.score + 1,
        status: GAME_STATUS.PLAYING,
      };
    default:
      throw new Error("Unknown action");
  }
};

export const MemoryContextProvider = ({ children }) => {
  const [cards, setCards] = useState(() => getInitialMemory());
  const [game, dispatch] = useReducer(gameReducer, {
    score: 0,
    status: GAME_STATUS.PLAYING,
    tryPairCard: null,
  });

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

    dispatch({ type: GAME_ACTION.ReturnCard });

    if (returnedCards.length !== 2) {
      return;
    }

    const isPair = isPairCards(returnedCards[0], returnedCards[1]);

    setTimeout(
      () => {
        nextRound(isPair, newCards, returnedCards);
      },
      isPair ? 400 : 1000
    );
  };

  const nextRound = (isPair, newCards, returnedCards) => {
    if (isPair && isMemoryFinished(newCards)) {
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
    dispatch({ type: GAME_ACTION.Clear, isPair });
  };

  return (
    <MemoryContext.Provider value={{ cards, returnCard, score: game.score }}>
      {children}
    </MemoryContext.Provider>
  );
};
