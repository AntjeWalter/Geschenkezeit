//import { listOfBirthdays } from "../public/lib/birthdays";
import { nanoid } from "nanoid";
import styled from "styled-components";

export default function Input({ onCreateEntry }) {
  function handleSubmit(event) {
    event.preventDefault();
    const nameInput = event.target.name.value;
    const ideaInput = event.target.idea.value;
    const dateInput = event.target.date.value;
    const newEntry = {
      id: nanoid(),
      name: nameInput,
      birthday: dateInput,
      ideas: [ideaInput],
    };
    onCreateEntry(newEntry);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledNameInput
        type="text"
        placeholder="Name"
        name="name"
      ></StyledNameInput>
      <StyledIdeaInput
        type="text"
        placeholder="Geschenkideen"
        name="idea"
      ></StyledIdeaInput>
      <StyledDateInput
        type="date"
        placeholder="Geburtstag"
        name="date"
        min="1900-01-01"
      />
      <StyledSubmitButton type="submit">Hinzufügen</StyledSubmitButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  bottom: 20px;
  gap: 10px;
  margin-bottom: 25px;
  background-color: #f4f4f8;
  padding: 20px;
  max-width: 800px;
  width: 100vw;
`;

const StyledNameInput = styled.input`
  border: none;
  background-color: #e6e6ea;
  font-family: AppleGothic;
  text-align: center;
  flex-grow: 1;
  padding: 5px;
`;

const StyledIdeaInput = styled.input`
  border: none;
  background-color: #e6e6ea;
  font-family: AppleGothic;
  text-align: center;
  flex-grow: 1;
`;

const StyledDateInput = styled.input`
  border: none;
  background-color: #e6e6ea;
  font-family: AppleGothic;
  text-align: center;
  flex-grow: 1;
`;

const StyledSubmitButton = styled.button`
  background-color: #fed766;
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  font-family: AppleGothic;
  text-align: center;
`;
