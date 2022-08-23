import { Project } from "./Project";
import { SectionWrapper } from "../atom/SectionWrapper";

export const ProjectSection = () => {
  // GitHub Repository - Exercise
  const projects = [
    {
      name: "DEMO",
      description: "DEMO",
      stargazerCount: 12,
      url: "https://github.com",
      homepageUrl: "https://github.com",
    },
  ];

  return (
    <SectionWrapper title="Projects">
      <div className="flex flex-wrap gap-8 justify-center">
        {/* GitHub Repository - Exercise (replace this) */}
        <Project {...projects[0]} />
      </div>
    </SectionWrapper>
  );
};
