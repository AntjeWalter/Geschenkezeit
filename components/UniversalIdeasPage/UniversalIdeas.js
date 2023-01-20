import styled from "styled-components";
import { useState } from "react";
import AssignSelect from "./AssignSelect";
import { BsTrash2, BsPencil } from "react-icons/bs";

export default function UniversalIdeas({
  idea,
  id,
  onUpdateIdea,
  onDeleteIdea,
  entries,
  onIdeaAssign,
}) {
  const [edit, setEdit] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const adaptedIdea = event.target.adaptedIdea.value;
    const editedIdea = { idea: adaptedIdea, id };
    onUpdateIdea(editedIdea, id);
    setEdit(!edit);
  }

  return (
    <>
      {edit === true ? (
        <StyledForm onSubmit={handleSubmit}>
          <StyledEditInput
            type="text"
            name="adaptedIdea"
            aria-label="Bearbeitete Idee"
            defaultValue={idea}
          ></StyledEditInput>
          <StyledEditButton
            type="submit"
            aria-label="Bearbeitete Idee speichern"
          >
            OK
          </StyledEditButton>
        </StyledForm>
      ) : (
        <StyledIdeaContainer>
          <StyledIdea>{idea}</StyledIdea>
          <StyledButton
            type="button"
            aria-label="Bearbeiten-Button"
            onClick={() => setEdit(!edit)}
          >
            <BsPencil />
          </StyledButton>
          <AssignSelect
            entries={entries}
            onIdeaAssign={onIdeaAssign}
            idea={idea}
          />
          <StyledButton
            type="button"
            aria-label="Löschen-Button"
            onClick={() => onDeleteIdea(id)}
          >
            <BsTrash2 />
          </StyledButton>
        </StyledIdeaContainer>
      )}
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 25px 20px 20px;
  padding: 5px;
  gap: 5px;
`;

const StyledEditInput = styled.input`
  border: none;
  padding: 10px;
  flex-grow: 1;
  font-family: PTSans;
`;

const StyledEditButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: var(--yellow);
  padding: 10px;
  font-family: PTSans;
`;

const StyledIdeaContainer = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  margin: auto auto 10px auto;
  padding: 10px 5px;
  width: 90%;
  word-wrap: break-word;
  background-color: var(--darkgray);
  border-radius: 5px;
  align-items: center;
  box-shadow: 5px 5px 10px -5px #c4c4c7;
`;

const StyledIdea = styled.p`
  margin: auto;
  padding: 5px;
  width: 90%;
  word-wrap: break-word;
  background-color: var(--darkgray);
  border-radius: 5px;
  align-items: center;
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  margin: 3px;
  font-size: 1.25rem;
  justify-self: end;
`;
