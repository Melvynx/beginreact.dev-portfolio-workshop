import { Project } from "./Project";
import { SectionWrapper } from "../atom/SectionWrapper";
import { useFetch } from "../../hooks/useFetch";
import { getListOfUrlRepositoriesUrl } from "../../lib/api-url";
import { Typography } from "../atom/Typography";
import { Loader } from "../atom/Loader";
import { GITHUB_USERNAME } from "../../lib/config";

export const ProjectSection = () => {
  const {
    data: projects,
    error,
    isLoading,
    isIdle,
    isRejected,
  } = useFetch(getListOfUrlRepositoriesUrl(GITHUB_USERNAME));

  if (isLoading || isIdle) {
    return <Loader />;
  }

  if (isRejected) {
    return (
      <Typography className="text-red-500 font-bold">
        Sorry, there is an error : {error}
      </Typography>
    );
  }

  return (
    <SectionWrapper title="Projects">
      <div className="flex flex-wrap gap-8 justify-center">
        {projects.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
};
