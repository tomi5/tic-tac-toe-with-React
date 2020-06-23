import React from "react";
import Square from "./Square";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  //shallow method is used to render the single component that we are testing. It does not render child components.
  shallow(<Square />);
});
