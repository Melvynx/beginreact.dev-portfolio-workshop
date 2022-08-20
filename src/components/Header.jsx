import { SocialNetworks } from "./atom/SocialNetwork";
import { socialNetworks } from "../lib/social-network";

export const Header = () => {
  return (
    <header className="flex py-8">
      <span className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-primary to-secondary">
        Jean-Pierre Smith
      </span>
      <SocialNetworks className="ml-auto" socialNetworks={socialNetworks} />
    </header>
  );
};
