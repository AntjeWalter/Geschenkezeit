import { nanoid } from "nanoid";
import styled from "styled-components";

export default function IdeasForm({ onCreateIdea }) {
  function handleSubmit(event) {
    event.preventDefault();
    const idea = event.target.ideas.value;
    const newIdea = { idea, id: nanoid() };
    onCreateIdea(newIdea);
    event.target.reset();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="Ideen..."
        name="ideas"
        aria-label="Ideas Input"
        required
      ></StyledInput>
      <StyledButton type="submit" aria-label="Submit Input">
        OK
      </StyledButton>
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
  margin-bottom: 34px;
  background-color: var(--lightgray);
  padding: 0.5rem 1rem 10px 1rem;
  max-width: 800px;
  width: 100vw;
  box-shadow: 0px -10px 10px -5px #c4c4c4;
`;

const StyledInput = styled.input`
  border: none;
  background-color: var(--darkgray);
  text-align: center;
  flex-grow: 1;
  font-family: PTSans;
`;

const StyledButton = styled.button`
  background-color: var(--yellow);
  border: none;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  font-family: PTSans;
`;
