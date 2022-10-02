import { useEffect, useRef } from "react";

// Draw exercise
export const DrawCanvas = ({ canvas }) => {
  const isDrawing = useRef(false);
  const lastCoordinate = useRef(null);

  const startDrawing = (event) => {};

  const stopDrawing = () => {};

  const draw = (event) => {};

  useEffect(() => {}, []);

  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseMove={draw}
      width={560}
      height={315}
      ref={canvas}
      className="m-auto rounded-md bg-white shadow-md"
    />
  );
};
