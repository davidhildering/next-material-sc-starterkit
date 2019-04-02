import React from "react";
import { shallow } from "enzyme";
import Home from ".";

describe("Homepage", () => {
  it("should render correctly with no props", () => {
    const component = shallow(<Home />);

    expect(component).toMatchSnapshot();
  });
});
