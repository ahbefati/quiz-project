// Write a question to the screen
// 4 answers
// 1 button
// if none of the answers is selected button does nothing
// if an answer is chosen show the next question on button click

import React from "react";
import Question from "./Question";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// const mockQuestions = require("./mockQuestions");
// console.log(mockQuestions);

test("should write a question to the screen", () => {
  render(<Question />);
  expect(screen.getByText("Who developed WordPress?")).toBeVisible();
});
