import { Mail } from "react-feather";
import { Social } from "../types";
import { useContentful } from "../lib/contentful";
import { Flex, Divider, IconButton, Text } from "theme-ui";
import SocialIconLink from "./SocialIconLink";
import React from "react";
import { InfoContext } from "../lib/infoContext";

export default () => {
  const socials = useContentful("social", {
    "fields.work": true,
  }) as Social[];
  const info = React.useContext(InfoContext);

  return (
    <footer style={{ width: "90%", textAlign: "center" }}>
      <Divider pt={3} />
      <Flex sx={{ justifyContent: "center" }} py={3}>
        {info.email && (
          <a href={`mailto:${info.email}`}>
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
      <Text p={2} variant="detail">
        © 2020 {info.name}
      </Text>
    </footer>
  );
};
