import { RichTextNode } from "../types";

export default ({ text }: { text: RichTextNode }) => {
  return text ? (
    <>
      {text.content.map((item, index) => (
        <p key={index}>{item.content[0].value}</p>
      ))}
    </>
  ) : (
    <div />
  );
};
