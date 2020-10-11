import { SocialType } from "../types";
import { GitHub, Linkedin, Twitter, Link } from "react-feather";
import { IconButton } from "theme-ui";

const icons: { [key in SocialType]: JSX.Element } = {
  Twitter: <Twitter aria-label="Twitter" width="48" height="48" />,
  GitHub: <GitHub aria-label="GitHub" />,
  LinkedIn: <Linkedin aria-label="Linkedin" />,
};

const SocialIconLink = ({
  link,
  socialType,
}: {
  link: string;
  socialType?: SocialType;
}): JSX.Element => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    title={socialType || link}
  >
    <IconButton>{icons[socialType] || <Link aria-label="Link" />}</IconButton>
  </a>
);

export default SocialIconLink;
