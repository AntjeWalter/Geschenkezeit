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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="adaptedIdea"
            defaultValue={idea.idea}
          ></input>
          <button type="submit">OK</button>
        </form>
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
