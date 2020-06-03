import { Mail } from "react-feather";
import { Social, LoadingValue } from "../types";
import { useContentfulEntries } from "../lib/contentful";
import { Flex, Divider, IconButton, Text } from "theme-ui";
import SocialIconLink from "./SocialIconLink";
import React from "react";
import { InfoContext } from "../lib/infoContext";

const Footer = (): JSX.Element => {
  const socials: LoadingValue<Social[]> = useContentfulEntries("social", {
    "fields.work": true,
  });
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
        {socials.data &&
          socials.data.map((item, index) => (
            <SocialIconLink
              link={item.link}
              socialType={item.type}
              key={index}
            ></SocialIconLink>
          ))}
      </Flex>
      <Text pb={2} variant="detail">
        © 2020 {info.name}
      </Text>
    </footer>
  );
};

export default Footer;
