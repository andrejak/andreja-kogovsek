import { GitHub, Linkedin, Mail, Twitter } from "react-feather";
import { Social, SocialType } from "../types";
import { useContentful } from "../lib/contentful";

const icons: { [key in SocialType]: JSX.Element } = {
  Twitter: <Twitter />,
  GitHub: <GitHub />,
  LinkedIn: <Linkedin />,
};

export default ({ email }: { email: string }) => {
  const socials = useContentful("social", {
    "fields.work": true,
  }) as Social[];
  return (
    <footer>
      {email && (
        <a href={`mailto:${email}`}>
          <Mail />
        </a>
      )}
      {socials.map((social) => (
        <a
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          key={social.link}
        >
          {icons[social.type]}
        </a>
      ))}
    </footer>
  );
};
