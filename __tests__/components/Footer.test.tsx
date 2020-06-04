import { render } from "@testing-library/react";
import Footer from "../../components/Footer";

test("renders copyright", () => {
  const { getByText } = render(<Footer />);
  const titleElement = getByText(/©/);
  expect(titleElement).toBeInTheDocument;
});
