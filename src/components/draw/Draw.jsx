import { useEffect, useRef } from 'react';
import { Button } from '../atom/Button';
import { DrawCanvas } from './DrawCanvas';
import { DrawControl } from './DrawControl';

const DEFAULT_COLOR = '#000000';
const DEFAULT_SIZE = 4;

export const Draw = () => {
  const canvas = useRef(null);

  useEffect(() => {
    canvas.current.getContext('2d').strokeStyle = DEFAULT_COLOR;
    canvas.current.getContext('2d').lineWidth = DEFAULT_SIZE;
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <DrawCanvas canvas={canvas} />
      <DrawControl
        defaultColor={DEFAULT_COLOR}
        defaultSize={DEFAULT_SIZE}
        onColorChange={(color) => {
          canvas.current.getContext('2d').strokeStyle = color;
        }}
        onSizeChange={(size) => {
          canvas.current.getContext('2d').lineWidth = size;
        }}
      />
      <div className="flex gap-4 m-auto">
        <Button
          onClick={() => {
            canvas.current
              .getContext('2d')
              .clearRect(0, 0, canvas.current.width, canvas.current.height);
          }}
        >
          Reset
        </Button>
        <Button
          onClick={() => {
            const data = canvas.current.toDataURL();
            const link = document.createElement('a');
            link.download = 'image.png';
            link.href = data;
            link.click();
          }}
        >
          Save my drawing
        </Button>
      </div>
    </div>
  );
};
