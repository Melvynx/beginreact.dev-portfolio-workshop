import { Typography } from "./Typography";

export const SectionWrapper = ({ children, title }) => {
  return (
    <div className="flex flex-col items-center gap-12">
      <Typography variant="h2">{title}</Typography>
      {children}
    </div>
  );
};
