import { Typography } from "./atom/Typography";
import { SocialNetworks } from "./atom/SocialNetwork";
import { EMAIL, SOCIAL_NETWORKS } from "../lib/config";

export const Footer = () => {
  return (
    <footer className="p-4 md:p-8 flex flex-col gap-8 items-center ">
      <Typography variant="h2">Contact me !</Typography>
      <div className="flex flex-col items-center gap-2">
        <Typography variant="body2">
          I’ll be happy to chat with you about a potential job or a freelance
        </Typography>
        <a
          className="text-base text-primary underline"
          href={`mailto:${EMAIL}`}
        >
          {EMAIL}
        </a>
        <SocialNetworks socialNetworks={SOCIAL_NETWORKS} />
      </div>
    </footer>
  );
};
