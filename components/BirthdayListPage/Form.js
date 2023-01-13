import { nanoid } from "nanoid";
import { useState } from "react";
import styled from "styled-components";
import AddButton from "./AddButton";

export default function Form({ onCreateEntry }) {
  const [formActive, setFormActive] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const nameInput = event.target.name.value;
    const ideaInput = event.target.idea.value;
    const dateInput = event.target.date.value;

    const newEntry = {
      id: nanoid(),
      name: nameInput,
      birthday: dateInput,
      ideas: ideaInput,
    };
    onCreateEntry(newEntry);
    event.target.reset();
    setFormActive(false);
  }

  return (
    <div>
      {formActive === true ? (
        <StyledForm onSubmit={handleSubmit}>
          <StyledNameInput
            type="text"
            placeholder="Name"
            name="name"
            aria-label="Name Input"
            className="nameInput"
            required
          ></StyledNameInput>
          <StyledDateInput
            type="date"
            placeholder="Geburtstag"
            name="date"
            aria-label="Birthday Input"
            className="dateInput"
            min="1900-01-01"
            required
          />
          <StyledIdeaInput
            type="text"
            placeholder="Geschenkideen"
            name="idea"
            aria-label="Idea Input"
            className="ideaInput"
          ></StyledIdeaInput>

          <StyledSubmitButton type="submit" aria-label="Submit Input">
            Hinzufügen
          </StyledSubmitButton>
          <StyledCancelButton
            onClick={() => {
              setFormActive(false);
            }}
          >
            x
          </StyledCancelButton>
        </StyledForm>
      ) : (
        <AddButton
          onClick={() => {
            setFormActive(true);
          }}
        />
      )}
    </div>
  );
}

const StyledForm = styled.form`
  position: fixed;
  display: grid;
  grid-template-areas:
    "a a b b"
    "c c c c"
    "d d d e";
  bottom: 20px;
  gap: 10px;
  margin-bottom: 25px;
  background-color: #f4f4f8;
  padding: 1.2rem;
  padding-top: 0.5rem;
  max-width: 800px;
  width: 100vw;
  box-shadow: 0px -4px 10px 5px #c4c4c4;
`;

const StyledNameInput = styled.input`
  border: none;
  background-color: #e6e6ea;
  text-align: center;
  padding: 0.2rem;
  font-family: PTSans;
  grid-area: a;
`;

const StyledDateInput = styled.input`
  border: none;
  background-color: #e6e6ea;
  text-align: center;
  padding: 0.2rem;
  font-family: PTSans;
  grid-area: b;
`;

const StyledIdeaInput = styled.input`
  border: none;
  background-color: #e6e6ea;
  text-align: center;
  padding: 0.2rem;
  font-family: PTSans;
  grid-area: c;
`;

const StyledSubmitButton = styled.button`
  background-color: #fed766;
  border: none;
  border-radius: 5px;
  padding: 10px;
  grid-area: d;
  text-align: center;
  font-family: PTSans;
  @media (min-height: 720px) {
    margin-bottom: 20px;
  }
`;

const StyledCancelButton = styled.button`
  background-color: #fe4a49;
  border: none;
  border-radius: 5px;
  grid-area: e;
`;
