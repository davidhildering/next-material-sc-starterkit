import React from "react";
import { shallow } from "enzyme";
import Button from ".";

describe("Button", () => {
  it("should render correctly with no props", () => {
    const component = shallow(<Button />);

    expect(component).toMatchSnapshot();
  });
  it("should render button text correctly with given string", () => {
    const string = "kies pakket";
    const component = shallow(<Button title={string} />);
    expect(component).toMatchSnapshot();
  });
});
