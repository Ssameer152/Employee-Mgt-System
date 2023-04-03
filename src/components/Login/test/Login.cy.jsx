import Login from "../Login";
import cy from "cypress";
describe("<Login/>", () => {
  it("renders", () => {
    cy.mount(<Login />);
  });
});
