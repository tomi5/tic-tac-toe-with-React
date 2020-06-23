import React from "react";
import Board from "./Board";
import { shallow, mount } from "enzyme";

it("renders without crashing", () => {
  let squares = Array(9).fill(null); // squares props that Board required
  shallow(<Board squares={squares} />);
});

// test that on click of a board square an onClick event fires up
it("calls onClick event on click of a board square", () => {
  let squares = Array(9).fill(null);

  //fake onClick event that passes from Game component to Board -- using jest mock function jest.fn()
  const onClick = jest.fn();

  //children Square compontent is needed so Mount() is used instead of shallow()
  // mount() returns ReactWrapper
  let wrapper = mount(<Board squares={squares} onClick={onClick} />);

  // Enzyme's find() selector finds the component is going to simulate click using simulate()
  wrapper.find("button").first().simulate("click");

  // if the onClick is actually called - except 0 because it is click simulation on the first square which has a 9 index in the array of squares
  expect(onClick).toBeCalledWith(0);
});
