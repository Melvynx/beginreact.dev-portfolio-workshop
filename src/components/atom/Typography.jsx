import clsx from "clsx";

export const Typography = ({
  variant,
  component,
  color = "primary",
  children,
}) => {
  if (variant === "h1") {
    return (
      <h1
        className={clsx(
          "text-4xl",
          color === "primary" ? "text-skin-primary" : "text-skin-secondary"
        )}
      >
        {children}
      </h1>
    );
  }

  if (variant === "h2") {
    return (
      <h2
        className={clsx(
          "text-3xl",
          color === "primary" ? "text-skin-primary" : "text-skin-secondary"
        )}
      >
        {children}
      </h2>
    );
  }

  return (
    <p
      className={clsx(
        color === "primary" ? "text-skin-primary" : "text-skin-secondary",
        {
          ["text-base"]: variant === "body1",
          ["text-sm"]: variant === "body2",
        }
      )}
    >
      {children}
    </p>
  );
};
