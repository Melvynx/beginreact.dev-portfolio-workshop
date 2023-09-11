import { SectionWrapper } from '../atom/SectionWrapper';
import { Project } from './Project';
import { useEffect, useState } from 'react';
import { Loader } from '../atom/Loader/Loader'

export const ProjectSection = () => {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserProjects = () => {
    fetch(`/api/pinnedGithubRepository?username=HermannH34`)
      .then((response) => {
        console.log(response)
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setProjects(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setProjects(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchUserProjects();
  }, [])

  return (
    <SectionWrapper title="Projects">
      <div className="flex flex-wrap justify-center gap-8">
        {loading && <Loader />}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        {
          projects &&
          projects.map((project, i) =>
            <Project {...project} key={i} />
          )
        }
      </div>
    </SectionWrapper>
  );
};
