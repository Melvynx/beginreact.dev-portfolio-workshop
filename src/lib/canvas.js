export const getCoordinates = (event, canvas) => {
  if (!canvas) return null;

  const rect = canvas.getBoundingClientRect();

  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
};
