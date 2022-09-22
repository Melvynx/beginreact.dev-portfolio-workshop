export const DrawControl = ({
  defaultColor,
  defaultSize,
  onColorChange,
  onSizeChange,
}) => {
  return (
    <div>
      <label
        htmlFor="draw-color-picker"
        className="flex items-center justify-center gap-4"
      >
        Color
        <input
          id="draw-color-picker"
          type="color"
          defaultValue={defaultColor}
          onChange={(e) => {
            onColorChange(e.target.value);
          }}
        />
      </label>
      <label
        htmlFor="draw-size-picker"
        className="flex items-center justify-center gap-4"
      >
        Line size
        <input
          id="draw-size-picker"
          type="range"
          min="2"
          max="32"
          step="2"
          defaultValue={defaultSize}
          onChange={(e) => {
            onSizeChange(e.target.value);
          }}
        />
      </label>
    </div>
  );
};
