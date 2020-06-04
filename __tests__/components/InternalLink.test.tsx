import { render } from "@testing-library/react";
import InternalLink from "../../components/InternalLink";

test("renders link text", () => {
  const text = "Link";
  const { getByText } = render(<InternalLink href="/">{text}</InternalLink>);
  const titleElement = getByText(text);
  expect(titleElement).toBeInTheDocument;
});
