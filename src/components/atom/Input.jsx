import { useId } from "react";

export const TextField = (props) => {
  const id = useId();

  return (
    <div className="relative">
      <label
        className="block text-xs md:text-sm font-medium text-skin-secondary"
        htmlFor={id}
      >
        {props.label}
      </label>

      <input
        className="w-full p-3 mt-1 text-sm border-2 border-paper bg-transparent focus:border-opacity-100 border-opacity-50  border-primary rounded"
        id={id}
        {...props}
      />
    </div>
  );
};
