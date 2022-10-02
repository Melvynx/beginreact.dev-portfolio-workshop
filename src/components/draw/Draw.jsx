import { useRef } from "react";
import { Button } from "../atom/Button";
import { DrawCanvas } from "./DrawCanvas";
import { DrawControl } from "./DrawControl";

const DEFAULT_COLOR = "#000000";
const DEFAULT_SIZE = 4;

// Draw exercise
export const Draw = () => {
  const canvas = useRef(null);

  return (
    <div className="flex flex-col gap-8">
      <DrawCanvas canvas={canvas} />
      <DrawControl />
      <div className="m-auto flex gap-4">
        <Button onClick={() => {}}>Reset</Button>
        <Button onClick={() => {}}>Save my drawing</Button>
      </div>
    </div>
  );
};
