import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BirthdayEntry from "./BirthdayEntry";

test("renders an entry as a section", () => {
  const entry = {
    id: 1,
    name: "Antje",
    birthday: "2023-03-01",
    ideas: "",
    notes: "",
  };
  const onDelete = jest.fn();
  const onUpdateEntry = jest.fn();
  render(
    <BirthdayEntry
      id={entry.id}
      name={entry.name}
      birthday={entry.birthday}
      ideas={entry.ideas}
      notes={entry.notes}
      onDelete={onDelete}
      onUpdateEntry={onUpdateEntry}
    />
  );
  const mockentry = screen.getByTestId("entry");
  expect(mockentry).toBeInTheDocument();
});
