import { nanoid } from "nanoid";
import styled from "styled-components";

export default function Form({ onCreateEntry }) {
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
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="Name"
        name="name"
        aria-label="Name Input"
        required
      ></StyledInput>
      <StyledInput
        type="text"
        placeholder="Geschenkideen"
        name="idea"
        aria-label="Idea Input"
      ></StyledInput>
      <StyledInput
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
  padding-top: 10px;
  max-width: 800px;
  width: 100vw;
  box-shadow: 0px -4px 10px 5px #c4c4c4;
`;

const StyledInput = styled.input`
  border: none;
  background-color: #e6e6ea;
  text-align: center;
  flex-grow: 1;
  padding: 5px;
  font-family: PTSans;
`;

const StyledSubmitButton = styled.button`
  background-color: #fed766;
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  text-align: center;
  font-family: PTSans;
`;
