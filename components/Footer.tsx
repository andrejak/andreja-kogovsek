import { Mail } from "react-feather";
import { Social } from "../types";
import { useContentful } from "../lib/contentful";
import { Flex, Divider, IconButton, Text } from "theme-ui";
import SocialIconLink from "./SocialIconLink";

export default ({ email }: { email: string }) => {
  const socials = useContentful("social", {
    "fields.work": true,
  }) as Social[];

  return (
    <footer style={{ width: "80%", textAlign: "center" }}>
      <Divider pt={3} />
      <Flex sx={{ justifyContent: "center" }} py={3}>
        {email && (
          <a href={`mailto:${email}`}>
            <IconButton>
              <Mail />
            </IconButton>
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
      <Text p={2}>© 2020 Andreja Kogovsek</Text>
    </footer>
  );
};
