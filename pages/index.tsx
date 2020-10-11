import RichText from "../components/RichText";
import { Box, Flex, Heading } from "theme-ui";
import InternalLink from "../components/InternalLink";
import { InfoContext } from "../lib/infoContext";
import React from "react";
import { useContentfulAsset } from "../lib/contentful";
import { animated } from "react-spring";
import { photoWidth, photoHeight } from "../styles";
import { moveAndFadeInTransition } from "../lib/utils";

const Home: React.FC = () => {
  const info = React.useContext(InfoContext);
  const photo = useContentfulAsset("Photo - Small");
  const photoTransitions = moveAndFadeInTransition("50px", "0");
  const descTransitions = moveAndFadeInTransition("-50px", "0");
  const nameTransitions = moveAndFadeInTransition("0", "-50px");
  const linksTransitions = moveAndFadeInTransition("0", "50px");

  return (
    <Flex
      pt={4}
      sx={{
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: ["center", "flex-end"],
          textAlign: ["center", "right"],
          justifyContent: "start",
          minHeight: photoHeight,
          minWidth: ["300px", "450px"],
        }}
        p={4}
      >
        {nameTransitions.map(
          ({ item, key, props }) =>
            item && (
              <animated.div key={key} style={props}>
                <Heading as="h1" style={{ minHeight: "60px" }}>
                  {info.name}
                </Heading>
              </animated.div>
            ),
        )}
        <div style={{ minHeight: "250px" }}>
          <div style={{ minHeight: "150px" }}>
            {info.description &&
              descTransitions.map(
                ({ item, key, props }) =>
                  item && (
                    <animated.div key={key} style={props}>
                      <RichText text={info.description} />
                    </animated.div>
                  ),
              )}
          </div>
          {linksTransitions.map(
            ({ item, key, props }) =>
              item && (
                <animated.div key={key} style={props}>
                  <Flex
                    sx={{
                      minHeight: "100px",
                      justifyContent: "space-around",
                      flexDirection: "column",
                    }}
                  >
                    <InternalLink href="/projects">Projects</InternalLink>
                    <InternalLink href="/cv">CV</InternalLink>
                  </Flex>
                </animated.div>
              ),
          )}
        </div>
      </Flex>
      <Box sx={{ width: photoWidth, height: photoHeight }}>
        {photo.data &&
          photoTransitions.map(
            ({ item, key, props }) =>
              item && (
                <animated.div key={key} style={props}>
                  <img
                    src={photo.data.fields.file.url}
                    alt={photo.data.fields.description || "Photo"}
                    aria-label={photo.data.fields.description || "Photo"}
                    width={photoWidth}
                  />
                </animated.div>
              ),
          )}
      </Box>
    </Flex>
  );
};

export default Home;
