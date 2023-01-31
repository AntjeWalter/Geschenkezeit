import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UniversalIdeas from "./UniversalIdeas";

test("renders an idea", (entries = []) => {
  render(<UniversalIdeas idea={"Idea"} entries={entries} />);
  const idea = screen.getByTestId("idea");
  expect(idea).toBeInTheDocument();
});
