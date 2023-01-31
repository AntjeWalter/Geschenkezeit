import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CalendarFromReact from "./Calendar";

test("renders the calendar", (entries = []) => {
  render(<CalendarFromReact entries={entries} />);
  const calendar = screen.getByTestId("calendar");
  expect(calendar).toBeInTheDocument();
});
