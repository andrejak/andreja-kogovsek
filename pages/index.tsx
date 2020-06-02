import { useContentful } from "../lib/contentful";
import { Info } from "../types";
import RichText from "../components/RichText";
import { Flex, Spinner } from "theme-ui";
import InternalLink from "../components/InternalLink";

export default () => {
  const info: Info[] = useContentful("info", { limit: 1 });

  return (
    <div>
      <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
        {info[0] ? (
          <>
            <h1>{info[0].name || "Andreja Kogovsek"}</h1>
            <RichText text={info[0].description} />
          </>
        ) : (
          <Spinner />
        )}
        <InternalLink href="/cv">CV</InternalLink>
        <InternalLink href="/projects">Projects</InternalLink>
      </Flex>
    </div>
  );
};
