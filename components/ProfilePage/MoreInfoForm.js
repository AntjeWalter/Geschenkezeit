import styled from "styled-components";
import { useState } from "react";

export default function MoreInfoForm({
  personId,
  onUpdateEntryNotes,
  currentProfile,
}) {
  const [edit, setEdit] = useState(false);

  function handleNotesSubmit(event) {
    event.preventDefault();
    const adaptedNotes = event.target.adaptedNotes.value;
    onUpdateEntryNotes(adaptedNotes, personId);
    setEdit(!edit);
  }

  return (
    <>
      <StyledInfo>Notizen zur Person</StyledInfo>
      <StyledNotesWrapper>
        {edit === true || !currentProfile.notes ? (
          <StyledForm onSubmit={handleNotesSubmit}>
            <StyledTextarea
              name="adaptedNotes"
              aria-label="Edited Notes"
              placeholder="Was mag die Person? Was mag sie nicht?"
              defaultValue={currentProfile.notes}
              required
            ></StyledTextarea>
            <StyledButton type="submit">OK</StyledButton>
          </StyledForm>
        ) : (
          <>
            <StyledNotes>{currentProfile.notes}</StyledNotes>
            <StyledButton
              type="button"
              aria-label="Edit-Button"
              onClick={() => setEdit(!edit)}
            >
              +
            </StyledButton>
          </>
        )}
      </StyledNotesWrapper>
    </>
  );
}

const StyledInfo = styled.h3`
  margin: 1.5rem;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  border-bottom: 1px solid black;
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

const StyledButton = styled.button`
  height: 1.8rem;
  width: 1.8rem;
  align-self: center;
  border: none;
  background-color: #fed766;
  border-radius: 5px;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;

const StyledTextarea = styled.textarea`
  align-self: left;
  width: 70vw;
  height: 5em;
  @media (min-width: 800px) {
    width: 700px;
  }
`;
