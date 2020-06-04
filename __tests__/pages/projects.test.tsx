import { render } from "@testing-library/react";
import Page from "../../pages/projects";

test("renders header", () => {
  const { getByText } = render(<Page />);
  const titleElement = getByText(/Projects/);
  expect(titleElement).toBeInTheDocument;
});
