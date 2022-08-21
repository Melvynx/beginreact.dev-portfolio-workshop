import { Typography } from "../atom/Typography";

export const Project = ({
  name,
  description,
  stargazerCount,
  url,
  homepageUrl,
}) => {
  return (
    <div className="transition-transform bg-paper p-4 md:p-8 flex flex-col gap-4 w-80 rounded-2xl hover:shadow-xl hover:scale-105 focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50">
      <p className="text-right w-full">⭐ {stargazerCount}</p>
      <a href={url}>
        <Typography className="font-bold" variant="h3">
          {name}
        </Typography>
      </a>
      <Typography variant="body1">{description}</Typography>
      {homepageUrl ? (
        <a className="text-primary underline" href={homepageUrl}>
          {homepageUrl.replace("https://", "")}
        </a>
      ) : null}
    </div>
  );
};
