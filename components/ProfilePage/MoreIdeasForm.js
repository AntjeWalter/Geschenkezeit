import { useState } from "react";
import styled from "styled-components";

export default function MoreIdeasForm({
  id,
  name,
  birthday,
  notes,
  currentProfile,
  personId,
  onUpdateIdeas,
}) {
  const [edit, setEdit] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const adaptedIdeas = event.target.ideas.value;
    const adaptedEntryWithMoreIdeas = {
      id,
      name,
      birthday,
      ideas: adaptedIdeas,
      notes,
    };
    onUpdateIdeas(adaptedEntryWithMoreIdeas, personId);
    setEdit(!edit);
  }

  return (
    <>
      <StyledInfo>Geschenkideen:</StyledInfo>
      <StyledNotesWrapper>
        {edit === true || !currentProfile.ideas ? (
          <StyledForm onSubmit={handleSubmit}>
            <StyledTextArea
              name="ideas"
              aria-label="Eingabe Geschenkideen"
              defaultValue={currentProfile.ideas}
              placeholder="Was könnte man der Person schenken?"
            ></StyledTextArea>
            <StyledButton type="submit" aria-label="Ideen speichern">
              OK
            </StyledButton>
          </StyledForm>
        ) : (
          <>
            <StyledNotes>{currentProfile.ideas}</StyledNotes>
            <StyledButton type="button" onClick={() => setEdit(!edit)}>
              +
            </StyledButton>
          </>
        )}
      </StyledNotesWrapper>
    </>
  );
}

const StyledInfo = styled.h3`
  margin: 3rem 1.5rem 1rem 1.5rem;
  font-size: 1.25rem;
  border-bottom: 1px solid black;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;

const StyledTextArea = styled.textarea`
  align-self: left;
  width: 70vw;
  height: 5em;
  border: none;
  border-radius: 5px;
  font-family: PTSans;
  font-size: 0.9rem;
  @media (min-width: 800px) {
    width: 700px;
  }
`;

const StyledButton = styled.button`
  height: 1.8rem;
  width: 1.8rem;
  align-self: center;
  border: none;
  background-color: var(--yellow);
  border-radius: 5px;
`;

const StyledNotesWrapper = styled.div`
  display: flex;
  margin: 1.5rem;
  margin-top: 1rem;
  justify-content: space-between;
`;

const StyledNotes = styled.p`
  margin-right: 1.5rem;
  margin-top: 0.3rem;
  width: 70%;
`;
