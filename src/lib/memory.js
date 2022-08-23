/**
 * Copied from https://bost.ocks.org/mike/shuffle/
 * @param array Array to be shuffled
 * @returns {*[]}
 */
export const shuffle = (array) => {
  const copy = [];
  let arrayLength = array.length;
  let i;

  // While there remain elements to shuffle…
  while (arrayLength) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * array.length);

    // If not already shuffled, move it to the new array.
    if (i in array) {
      copy.push(array[i]);
      delete array[i];
      arrayLength--;
    }
  }

  return copy;
};

const animals = [
  "🐶",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🦊",
  "🐻",
  "🐼",
  "🐨",
  "🐯",
  "🦁",
  "🐮",
  "🐷",
  "🐸",
  "🐵",
  "🐔",
  "🐧",
  "🐦",
];

export const CARD_STATE = {
  HIDE: "hide",
  FIND: "find",
  RETURNED: "returned",
};

export const getInitialMemory = () => {
  return shuffle([...animals, ...animals]).map((v, i) => ({
    id: `card-${v}-${i}`,
    emoji: v,
    state: CARD_STATE.HIDE,
  }));
};

export const GAME_STATUS = {
  PLAYING: "playing",
  FINISHED: "finished",
  WAITING_FOR_SECOND_CARD: "waitingForSecondCard",
  WAIT_FOR_CLEAR: "waitForReturn",
};

export const GAME_ACTION = {
  ReturnCard: "ReturnCard",
  Clear: "Clear",
};

export const isPairCards = (card1, card2) => {
  return card1.emoji === card2.emoji;
};

export const isMemoryFinished = (cards) => {
  return cards.every((card) => card.state === CARD_STATE.FIND);
};
