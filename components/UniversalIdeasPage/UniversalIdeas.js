import styled from "styled-components";
import { useState } from "react";
import { nanoid } from "nanoid";
import IdeasForm from "./IdeasForm";

export default function UniversalIdeas({
  idea,
  id,
  onUpdateIdea,
  onDeleteIdea,
}) {
  const [edit, setEdit] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const adaptedIdea = event.target.adaptedIdea.value;
    const editedIdea = { idea: adaptedIdea, id };
    onUpdateIdea(editedIdea);
    setEdit(!edit);
  }

  return (
    <>
      {edit === true ? (
        <StyledForm onSubmit={handleSubmit}>
          <StyledEditInput
            type="text"
            name="adaptedIdea"
            defaultValue={idea.idea}
          ></StyledEditInput>
          <StyledEditButton type="submit">OK</StyledEditButton>
        </StyledForm>
      ) : (
        <StyledIdeaList>
          <StyledIdea>{idea.idea}</StyledIdea>
          <StyledButton
            type="button"
            aria-label="Edit-Button"
            onClick={() => setEdit(!edit)}
          >
            ✍🏼
          </StyledButton>
          <StyledButton
            type="button"
            aria-label="Delete-Button"
            onClick={() => onDeleteIdea(id)}
          >
            🗑
          </StyledButton>
        </StyledIdeaList>
      )}
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  padding: 5px;
  margin-right: 25px;
  gap: 5px;
`;

const StyledEditInput = styled.input`
  border: none;
  padding: 5px;
  flex-grow: 1;
`;

const StyledEditButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #fed766;
  padding: 5px;
`;

const StyledIdeaList = styled.section`
  display: grid;
  grid-template-columns: 60% 20% 20%;
  margin: auto;
  margin-bottom: 10px;
  width: 90%;
  word-wrap: break-word;
  background-color: #e6e6ea;
  padding: 15px;
  border-radius: 5px;
  align-items: center;
`;

const StyledIdea = styled.p`
  margin: auto;
  width: 90%;
  word-wrap: break-word;
  background-color: #e6e6ea;
  padding: 5px;
  border-radius: 5px;
  align-items: center;
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  margin: 3px;
  font-size: 1.25rem;
`;
