import { render } from "@testing-library/react";
import Page from "../../pages/cv";

test("renders header", () => {
  const { getByText } = render(<Page />);
  const titleElement = getByText(/CV/);
  expect(titleElement).toBeInTheDocument;
});
