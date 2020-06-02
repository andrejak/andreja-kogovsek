import RichText from "../components/RichText";
import { Flex, Spinner } from "theme-ui";
import InternalLink from "../components/InternalLink";
import { InfoContext } from "../lib/infoContext";
import React from "react";

export default () => {
  const info = React.useContext(InfoContext);

  return (
    <div>
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <>
          <h1>{info.name}</h1>
          {info.description ? (
            <RichText text={info.description} />
          ) : (
            <Spinner />
          )}
        </>
        <Flex sx={{ width: "100%", justifyContent: "space-around" }} py={3}>
          <InternalLink href="/cv">CV</InternalLink>
          <InternalLink href="/projects">Projects</InternalLink>
        </Flex>
      </Flex>
    </div>
  );
};
