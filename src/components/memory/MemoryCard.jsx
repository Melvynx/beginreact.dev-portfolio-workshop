import clsx from "clsx";
import styles from "./MemoryCard.module.css";
import { CARD_STATE } from "../../lib/memory";

export const MemoryCard = ({ children, card, onClick }) => {
  const isReturned =
    card.state === CARD_STATE.RETURNED || card.state === CARD_STATE.FIND;

  return (
    <div className="relative" onClick={() => onClick?.()}>
      <button
        className={clsx(
          styles.transition,
          "border-primary p-0.5 rounded bg-secondary",
          {
            [clsx("!bg-red-400", styles.rotate)]: !isReturned,
            [clsx("!bg-green-400", styles.bounce)]:
              card.state === CARD_STATE.FIND,
          }
        )}
      >
        <span className="bg-paper p-3 block rounded">{children}</span>
      </button>
      <button
        style={{ backfaceVisibility: "hidden" }}
        className={clsx(
          styles.transition,
          "border-primary border-2 bg-paper rounded p-3 absolute inset-0 flex",
          {
            [styles.rotate]: isReturned,
          }
        )}
      >
        ❓{/* Memory Game - Exercise */}
      </button>
    </div>
  );
};
