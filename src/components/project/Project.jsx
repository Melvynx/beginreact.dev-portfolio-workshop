import { Typography } from "../atom/Typography";

export const Project = ({
  name,
  description,
  stargazerCount,
  url,
  homepageUrl,
}) => {
  return (
    <div className="transition-transform bg-paper p-4 md:p-8 flex flex-col gap-4 w-80 rounded-2xl hover:shadow-xl hover:scale-105 active:bg-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50">
      <div>⭐ {stargazerCount}</div>
      <a href={homepageUrl}>
        <Typography className="font-bold" variant="h3">
          {name}
        </Typography>
      </a>
      <Typography variant="body1">{description}</Typography>
      <a className="text-primary underline" href={url}>
        {url}
      </a>
    </div>
  );
};
