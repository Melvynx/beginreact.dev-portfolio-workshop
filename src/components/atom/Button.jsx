import clsx from "clsx";

/**
 * Simple button for the application
 *
 * @param props All props that a button can take
 * @param children Children of the button
 * @param className Class name of the button
 * @returns {JSX.Element}
 * @constructor
 */
export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={clsx(
        "inline-block px-8 py-3 text-sm font-medium text-white transition bg-primary rounded",
        "focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50",
        "active:bg-primary active:opacity-80",
        "hover:scale-105  hover:shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
