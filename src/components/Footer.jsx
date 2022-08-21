import { Typography } from "./atom/Typography";
import { SocialNetworks } from "./atom/SocialNetwork";
import { socialNetworks } from "../lib/social-network-data";

const email = "jean@gmail.com";

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
          href={`mailto:${email}`}
        >
          {email}
        </a>
        <SocialNetworks socialNetworks={socialNetworks} />
      </div>
    </footer>
  );
};
