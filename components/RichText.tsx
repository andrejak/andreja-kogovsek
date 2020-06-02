import { RichTextNode } from "../types";
import { Box, Link } from "theme-ui";

const RichText = ({ text }: { text: RichTextNode }) => {
  const contents =
    text.content &&
    text.content.map((item, index) => <RichText text={item} key={index} />);
  switch (text.nodeType) {
    case "text":
      return <span>{text.value}</span>;
    case "document":
      return <Box py={1}>{contents}</Box>;
    case "paragraph":
      return <p>{contents}</p>;
    case "hyperlink":
      return <Link href={text.data.uri}>{contents}</Link>;
    case "list-item":
      return <li>{contents}</li>;
    case "unordered-list":
      return <ul>{contents}</ul>;
    default:
      console.log("TODO: New content type", text);
      return <div />;
  }
};

export default RichText;
