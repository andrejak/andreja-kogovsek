import { Mail } from "react-feather";
import { Social, LoadingValue } from "../types";
import { useContentfulEntries } from "../lib/contentful";
import { Flex, Divider, IconButton, Text } from "theme-ui";
import SocialIconLink from "./SocialIconLink";
import React from "react";
import { InfoContext } from "../lib/infoContext";
import { footerHeight } from "../styles";

const socialsToShow: Social[] = [
  { type: "GitHub", link: "" },
  { type: "LinkedIn", link: "" },
  //{ contentType: "Twitter" },
];

const Footer = (): JSX.Element => {
  const availableSocials: LoadingValue<Social[]> = useContentfulEntries(
    "social",
    {
      "fields.work": true,
    },
  );
  const socials = availableSocials.data
    ? socialsToShow.map((social) => ({
        ...availableSocials.data.find(
          (fetched) => social.type === fetched.type,
        ),
      }))
    : socialsToShow;
  const info = React.useContext(InfoContext);

  return (
    <footer
      style={{ width: "90%", textAlign: "center", minHeight: footerHeight }}
    >
      <Divider pt={3} />
      <Flex sx={{ justifyContent: "center", minHeight: "64px" }} py={3}>
        <a href={`mailto:${info.email}`} title="Email">
          <IconButton>
            <Mail aria-label="Mail" />
          </IconButton>
        </a>
        {socials.map((item, index) => (
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
