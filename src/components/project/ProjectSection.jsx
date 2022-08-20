import { useEffect, useState } from "react";
import { getListOfRepositories } from "../../lib/github";
import { Project } from "./Project";

export const ProjectSection = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    getListOfRepositories("melvynx", controller.signal).then((data) => {
      setProjects(data);
    });
    return () => {};
  }, []);

  if (!projects) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {projects.map((project) => (
        <Project key={project.homepageUrl} {...project} />
      ))}
    </div>
  );
};
