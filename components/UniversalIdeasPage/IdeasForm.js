import styled from "styled-components";

export default function IdeasForm({ onCreateIdea }) {
  function handleSubmit(event) {
    event.preventDefault();
    const newIdea = event.target.ideas.value;
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
        +
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
  margin-bottom: 25px;
  background-color: #f4f4f8;
  padding: 1.2rem;
  padding-top: 0.5rem;
  max-width: 800px;
  width: 100vw;
  box-shadow: 0px -4px 10px 5px #c4c4c4;
`;

const StyledInput = styled.input`
  border: none;
  background-color: #e6e6ea;
  text-align: center;
  flex-grow: 1;
  font-family: PTSans;
`;

const StyledButton = styled.button`
  background-color: #fed766;
  border: none;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  font-family: PTSans;
  @media (min-height: 720px) {
    margin-bottom: 20px;
  }
`;
