import React from "react";
import { shallow } from "enzyme";
import Benefits from ".";

describe("Benefits", () => {
  it("should render correctly with no props", () => {
    const component = shallow(<Benefits />);

    expect(component).toMatchSnapshot();
  });
});
