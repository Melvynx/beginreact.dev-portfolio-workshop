import clsx from "clsx";

export const Typography = ({
  variant = "body1",
  component,
  color = "primary",
  children,
  className,
  ...props
}) => {
  if (variant === "h1") {
    return (
      <h1
        {...props}
        className={clsx(
          className,
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
        {...props}
        className={clsx(
          className,
          "text-3xl",
          color === "primary" ? "text-skin-primary" : "text-skin-secondary"
        )}
      >
        {children}
      </h2>
    );
  }

  if (variant === "h3") {
    return (
      <h3
        {...props}
        className={clsx(
          className,
          "text-2xl",
          color === "primary" ? "text-skin-primary" : "text-skin-secondary"
        )}
      >
        {children}
      </h3>
    );
  }

  return (
    <p
      {...props}
      className={clsx(
        className,
        color === "primary" ? "text-skin-primary" : "text-skin-secondary",
        {
          ["text-lg"]: variant === "body1",
          ["text-base"]: variant === "body2",
        }
      )}
    >
      {children}
    </p>
  );
};
