import { SocialType } from "../types";
import { GitHub, Linkedin, Twitter, Link } from "react-feather";
import { IconButton } from "theme-ui";

const icons: { [key in SocialType]: JSX.Element } = {
  Twitter: <Twitter />,
  GitHub: <GitHub />,
  LinkedIn: <Linkedin />,
};

export default ({
  link,
  socialType,
}: {
  link: string;
  socialType?: SocialType;
}) => (
  <IconButton>
    <a href={link} target="_blank" rel="noopener noreferrer">
      {icons[socialType] || <Link />}
    </a>
  </IconButton>
);
