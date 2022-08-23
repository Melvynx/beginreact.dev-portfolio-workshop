import { Typography } from "./Typography";

/**
 * Wrapper for all section, with the title and layout.
 *
 * @param children Children of the section
 * @param title Title of the section
 * @returns {JSX.Element}
 * @constructor
 */
export const SectionWrapper = ({ children, title }) => {
  return (
    <div className="flex flex-col items-center gap-12">
      <Typography variant="h2">{title}</Typography>
      {children}
    </div>
  );
};
