import React from "react";
import { shallow } from "enzyme";
import TopBanner from ".";

describe("TopBanner", () => {
  it("should render correctly with no props", () => {
    const component = shallow(<TopBanner />);

    expect(component).toMatchSnapshot();
  });
});
