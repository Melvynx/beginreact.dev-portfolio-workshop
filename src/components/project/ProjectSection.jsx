import { Project } from "./Project";
import { SectionWrapper } from "../atom/SectionWrapper";
import { useAsyncState } from "../../hooks/useAsync";
import { getListOfUrlRepositoriesUrl } from "../../lib/api-url";
import { Typography } from "../atom/Typography";
import { Loader } from "../atom/Loader";

const USERNAME = "melvynx";

export const ProjectSection = () => {
  const {
    data: projects,
    error,
    isLoading,
    isIdle,
    isRejected,
  } = useAsyncState(getListOfUrlRepositoriesUrl(USERNAME));

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
