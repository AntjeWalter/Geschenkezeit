import styled from "styled-components";
import { useState } from "react";

export default function MoreInfoForm({
  name,
  birthday,
  ideas,
  personId,
  onUpdateEntryNotes,
  currentProfile,
}) {
  const [edit, setEdit] = useState(false);

  function handleNotesSubmit(event) {
    event.preventDefault();
    const adaptedNotes = event.target.adaptedNotes.value;
    const adaptedEntryWithNotes = {
      personId,
      name,
      birthday,
      ideas,
      notes: adaptedNotes,
    };
    onUpdateEntryNotes(adaptedEntryWithNotes, personId);
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
              aria-label="Bearbeitete Notizen"
              placeholder="Was mag die Person? Was mag sie nicht?"
              defaultValue={currentProfile.notes}
              required
            ></StyledTextarea>
            <StyledButton type="submit" aria-label="Notizen speichern">
              OK
            </StyledButton>
          </StyledForm>
        ) : (
          <>
            <StyledNotes>{currentProfile.notes}</StyledNotes>
            <StyledButton
              type="button"
              aria-label="Bearbeiten-Button"
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
  margin: 1.5rem 1.5rem 1rem 1.5rem;
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
  border-radius: 5px;
  background-color: var(--yellow);
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
  border: none;
  border-radius: 5px;
  font-family: PTSans;
  font-size: 0.9rem;
  @media (min-width: 800px) {
    width: 700px;
  }
`;
