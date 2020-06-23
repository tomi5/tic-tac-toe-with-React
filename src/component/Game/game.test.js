import React from "react";
import Game from "./Game";
import { shallow, mount } from "enzyme";

it("renders without crashing", () => {
  //shallow method is used to render the single component that we are testing. It does not render child components.
  shallow(<Game />);
});

it("renders game status correctly", () => {
  const wrapper = mount(<Game />);
  const firstPlayer = wrapper.find("div").children("p").text();
  expect(firstPlayer).toEqual("Next Player: X");

  const button = wrapper.find("button.square").first();
  button.simulate("click");
  const secondPlayer = wrapper.find("div").children("p").text();
  expect(secondPlayer).toEqual("Next Player: O");

  // player 2
  const turn2 = wrapper.find("button.square").at(1); //at(index) method should return a wrapper around the node at a given index of the current wrapper (<Game />)
  turn2.simulate("click");

  //player 1
  const turn3 = wrapper.find("button.square").at(4);
  turn3.simulate("click");

  // player 2
  const turn4 = wrapper.find("button.square").at(5);
  turn4.simulate("click");

  //player 1
  const turn5 = wrapper.find("button.square").at(8);
  turn5.simulate("click");

  const winner = wrapper.find("div").children("p").text();
  expect(winner).toEqual("Winner: X");
});
