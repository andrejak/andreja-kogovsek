import { render } from "@testing-library/react";
import Index from "../../pages/index";

test("renders key links", () => {
  const { getByText } = render(<Index />);
  const cvElement = getByText(/CV/);
  expect(cvElement).toBeInTheDocument;
  const projectsElement = getByText(/Projects/);
  expect(projectsElement).toBeInTheDocument;
});
