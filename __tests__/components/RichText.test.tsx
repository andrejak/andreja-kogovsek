import { render } from "@testing-library/react";
import RichText from "../../components/RichText";
import { RichTextNode } from "../../types";

test("renders copyright", () => {
  const node: RichTextNode = { nodeType: "text", content: [], value: "Test" };
  const { getByText } = render(<RichText text={node} />);
  const titleElement = getByText(/Test/);
  expect(titleElement).toBeInTheDocument;
});
