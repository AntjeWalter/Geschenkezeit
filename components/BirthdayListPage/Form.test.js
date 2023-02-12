import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Form from "./Form";
import AddButton from "./AddButton";
import { useState } from "react";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const pushMock = jest.fn();

useRouter.mockReturnValue({
  query: {},
  push: pushMock,
});

//test component is needed because styled components are not read as HTML elements
function TestAddButtonComponent() {
  const [formActive, setFormActive] = useState(false);
  return (
    <>
      {formActive ? (
        <form data-testid="form"></form>
      ) : (
        <button
          onClick={() => setFormActive(true)}
          data-testid="addButton"
        ></button>
      )}
    </>
  );
}

test("AddButton is shown initially and disappears on click", async () => {
  const user = userEvent.setup();
  render(<TestAddButtonComponent />);
  const addButton = screen.queryByTestId("addButton");
  expect(addButton).toBeInTheDocument();
  await user.click(addButton);
  expect(addButton).not.toBeInTheDocument();
});

test("Form is shown after clicking AddButton", async () => {
  const user = userEvent.setup();
  render(<TestAddButtonComponent />);
  const addButton = screen.queryByTestId("addButton");
  await user.click(addButton);
  const form = screen.queryByTestId("form");
  expect(form).toBeInTheDocument();
});

//This test doesn't work:
test("REAL Form is shown after clicking AddButton", async () => {
  const user = userEvent.setup();
  render(<Form />);
  const addButton = screen.queryByTestId("addButton");
  await user.click(addButton);
  const form = screen.queryByTestId("form");
  screen.debug(form);
  expect(form).toBeInTheDocument();
});
