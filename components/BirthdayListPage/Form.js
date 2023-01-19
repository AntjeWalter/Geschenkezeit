import { nanoid } from "nanoid";
import { useState } from "react";
import styled from "styled-components";
import AddButton from "./AddButton";
import { BiXCircle } from "react-icons/bi";

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
    <>
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
            <BiXCircle size="20px" color="white" />
          </StyledCancelButton>
        </StyledForm>
      ) : (
        <AddButton
          onClick={() => {
            setFormActive(true);
          }}
        />
      )}
    </>
  );
}

const StyledForm = styled.form`
  position: fixed;
  display: grid;
  grid-template-areas:
    "name name date date"
    "idea idea idea idea"
    "submit submit submit cancel";
  bottom: 20px;
  gap: 10px;
  margin-bottom: 34px;
  background-color: var(--lightgray);
  padding: 1.2rem;
  padding-top: 0.5rem;
  max-width: 800px;
  width: 100vw;
  box-shadow: 0px -4px 10px 5px #c4c4c4;
  animation: 0.4s alternate slidein;
  @keyframes slidein {
    from {
      transform: translateX(5%);
    }
    to {
      transform: translateY(0%);
    }
  }

  @media (min-height: 720px) {
    margin-bottom: 35px;
    padding-bottom: 0px;
  }
`;

const StyledNameInput = styled.input`
  border: none;
  background-color: var(--darkgray);
  text-align: center;
  padding: 0.2rem;
  font-family: PTSans;
  grid-area: name;
`;

const StyledDateInput = styled.input`
  border: none;
  background-color: var(--darkgray);
  text-align: center;
  padding: 0.3rem;
  font-family: PTSans;
  grid-area: date;
`;

const StyledIdeaInput = styled.input`
  border: none;
  background-color: var(--darkgray);
  text-align: center;
  padding: 0.3rem;
  font-family: PTSans;
  grid-area: idea;
`;

const StyledSubmitButton = styled.button`
  background-color: var(--yellow);
  border: none;
  border-radius: 5px;
  padding: 10px;
  grid-area: submit;
  text-align: center;
  font-family: PTSans;
  @media (min-height: 720px) {
    margin-bottom: 20px;
  }
`;

const StyledCancelButton = styled.button`
  background-color: var(--red);
  border: none;
  border-radius: 5px;
  grid-area: cancel;
  padding-top: 3px;
  @media (min-height: 720px) {
    margin-bottom: 20px;
  }
`;
