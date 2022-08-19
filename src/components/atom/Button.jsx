export const Button = (props) => {
  return (
    <button
      className="inline-block px-8 py-3 text-sm font-medium text-white transition bg-primary rounded hover:scale-110 active:opacity-80 hover:shadow-xl active:bg-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50"
      {...props}
    >
      {props.children}
    </button>
  );
};
