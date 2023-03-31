import { render, screen } from "@testing-library/react";
import Signup from "../Signup";
describe("Signup Component", () => {
  it("should render signup component correctly", () => {
    render(<Signup />);
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
  });
});
