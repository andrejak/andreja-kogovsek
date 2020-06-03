import { SocialType } from "../types";
import { GitHub, Linkedin, Twitter, Link } from "react-feather";
import { IconButton } from "theme-ui";

const icons: { [key in SocialType]: JSX.Element } = {
  Twitter: <Twitter />,
  GitHub: <GitHub />,
  LinkedIn: <Linkedin />,
};

const SocialIconLink = ({
  link,
  socialType,
}: {
  link: string;
  socialType?: SocialType;
}): JSX.Element => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <IconButton>{icons[socialType] || <Link />}</IconButton>
  </a>
);

export default SocialIconLink;
