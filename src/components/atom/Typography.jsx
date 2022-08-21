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
    const H1Component = component || "h1";
    return (
      <H1Component
        {...props}
        className={clsx(
          className,
          "text-5xl",
          color === "primary" ? "text-skin-primary" : "text-skin-secondary"
        )}
      >
        {children}
      </H1Component>
    );
  }

  if (variant === "h2") {
    const H2Component = component || "h2";
    return (
      <H2Component
        {...props}
        className={clsx(
          className,
          "text-3xl md:text-4xl",
          color === "primary" ? "text-skin-primary" : "text-skin-secondary"
        )}
      >
        {children}
      </H2Component>
    );
  }

  if (variant === "h3") {
    const H3Component = component || "h3";

    return (
      <H3Component
        {...props}
        className={clsx(
          className,
          "text-2xl",
          color === "primary" ? "text-skin-primary" : "text-skin-secondary"
        )}
      >
        {children}
      </H3Component>
    );
  }

  const BodyComponent = component || "p";
  return (
    <BodyComponent
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
    </BodyComponent>
  );
};
