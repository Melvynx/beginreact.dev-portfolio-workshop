import { useEffect, useRef } from 'react';
import { getCoordinates } from '../../lib/canvas';

export const DrawCanvas = ({ canvas }) => {
  const isDrawing = useRef(false);
  const prevMouse = useRef(null);

  const startDrawing = (event) => {
    isDrawing.current = true;
    prevMouse.current = getCoordinates(event, canvas.current);
  };

  const stopDrawing = () => {
    isDrawing.current = false;
    prevMouse.current = null;
  };

  const draw = (event) => {
    if (!isDrawing.current) return;
    const context = canvas.current?.getContext('2d');
    const mouse = getCoordinates(event, canvas.current);

    if (!context || !mouse) return;

    if (prevMouse.current) {
      context.lineCap = 'round';
      context.lineJoin = 'round';
      context.beginPath();
      context.moveTo(prevMouse.current.x, prevMouse.current.y);
      context.lineTo(mouse.x, mouse.y);
      context.stroke();
    }

    prevMouse.current = mouse;
  };

  useEffect(() => {
    const handleMouseUp = () => {
      stopDrawing()
    }

    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <canvas
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      width={560}
      height={315}
      ref={canvas}
      className="m-auto bg-white rounded-md shadow-md"
    />
  );
};
