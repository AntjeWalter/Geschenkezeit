import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import UniversalIdeaEntry from "./UniversalIdeaEntry";

test("renders an idea", (entries = []) => {
  render(<UniversalIdeaEntry idea={"Idea"} entries={entries} />);
  const idea = screen.getByTestId("idea");
  expect(idea).toBeInTheDocument();
});
