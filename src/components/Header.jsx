import { SocialNetworks } from "./atom/SocialNetwork";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";

export const Header = () => {
  return (
    <header className="flex">
      <span className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-primary to-secondary">
        Jean-Pierre Smith
      </span>
      <SocialNetworks
        className="ml-auto"
        socialNetworks={[
          {
            url: "https://www.twitter.com/",
            name: "Twitter",
            icon: <SiTwitter />,
          },
          {
            url: "https://www.linkedin.com/",
            name: "Linkedin",
            icon: <SiLinkedin />,
          },
          {
            url: "https://www.github.com/",
            name: "Github",
            icon: <SiGithub />,
          },
        ]}
      />
    </header>
  );
};
