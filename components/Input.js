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
      <StyledDateInput type="date" placeholder="Geburtstag" name="date" />
      <StyledSubmitButton type="submit">Hinzufügen</StyledSubmitButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  bottom: 20px;
  gap: 10px;
  margin: 25px;
`;

const StyledNameInput = styled.input`
  border: none;
  background-color: #e6e6ea;
  font-family: AppleGothic;
  text-align: center;
  flex-grow: 1;
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
