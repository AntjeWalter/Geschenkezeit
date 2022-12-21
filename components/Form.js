import { nanoid } from "nanoid";
import styled from "styled-components";
import format from "date-fns/format";

export default function Form({ onCreateEntry }) {
  function handleSubmit(event) {
    event.preventDefault();
    const nameInput = event.target.name.value;
    const ideaInput = event.target.idea.value;
    const dateInput = event.target.date.value;

    /*
    //library used to format date to German dates:
    const dateInput = format(
      new Date(event.target.date.value),
      "dd'.'MM'.'yyyy"
    );
    */

    const newEntry = {
      id: nanoid(),
      name: nameInput,
      birthday: dateInput,
      ideas: ideaInput,
    };
    onCreateEntry(newEntry);
    event.target.reset();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledNameInput
        type="text"
        placeholder="Name"
        name="name"
        aria-label="Name Input"
        required
      ></StyledNameInput>
      <StyledIdeaInput
        type="text"
        placeholder="Geschenkideen"
        name="idea"
        aria-label="Idea Input"
      ></StyledIdeaInput>
      <StyledDateInput
        type="date"
        placeholder="Geburtstag"
        name="date"
        aria-label="Birthday Input"
        min="1900-01-01"
        required
      />
      <StyledSubmitButton type="submit" aria-label="Submit Input">
        Hinzufügen
      </StyledSubmitButton>
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
