import RichText from "../components/RichText";
import { Flex, Spinner, Image } from "theme-ui";
import InternalLink from "../components/InternalLink";
import { InfoContext } from "../lib/infoContext";
import React from "react";
import { useContentfulAsset } from "../lib/contentful";

const Home: React.FC = () => {
  const info = React.useContext(InfoContext);
  const photo = useContentfulAsset("Photo");

  return (
    <Flex
      pt={4}
      sx={{ alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}
    >
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: ["center", "end"],
          textAlign: ["center", "right"],
        }}
        p={3}
      >
        <>
          <h1>{info.name}</h1>
          {info.description ? (
            <RichText text={info.description} />
          ) : (
            <Spinner />
          )}
        </>
        <Flex
          sx={{
            minHeight: "100px",
            justifyContent: "space-around",
            flexDirection: "column",
          }}
          py={3}
        >
          <InternalLink href="/projects">Projects</InternalLink>
          <InternalLink href="/cv">CV</InternalLink>
        </Flex>
      </Flex>
      {photo.data ? (
        <Image
          src={photo.data.fields.file.url}
          width="250px"
          alt={photo.data.fields.description}
          p={3}
        />
      ) : (
        <Spinner />
      )}
    </Flex>
  );
};

export default Home;
