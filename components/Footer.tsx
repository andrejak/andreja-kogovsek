import { Mail } from "react-feather";
import { Social } from "../types";
import { useContentful } from "../lib/contentful";
import { Flex, Divider } from "theme-ui";
import SocialIconLink from "./SocialIconLink";

export default ({ email }: { email: string }) => {
  const socials = useContentful("social", {
    "fields.work": true,
  }) as Social[];

  return (
    <footer>
      <Divider />
      <Flex>
        {email && (
          <a href={`mailto:${email}`}>
            <Mail />
          </a>
        )}
        {socials.map((item, index) => (
          <SocialIconLink
            link={item.link}
            socialType={item.type}
            key={index}
          ></SocialIconLink>
        ))}
      </Flex>
    </footer>
  );
};
