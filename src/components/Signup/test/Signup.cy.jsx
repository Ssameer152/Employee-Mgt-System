import Signup from "../Signup";
import cy from "cypress";
describe("<Signup/>", () => {
  it("renders", () => {
    cy.mount(<Signup />);
  });
});
