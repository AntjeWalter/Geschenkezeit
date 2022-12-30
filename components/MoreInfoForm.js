import styled from "styled-components";
import { useState } from "react";

export default function MoreInfoForm({
  personId,
  onUpdateEntryNotes,
  currentProfile,
  notes,
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
        {edit === true || !notes ? (
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
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
  font-size: 1rem;
  border-bottom: 1px solid black;
`;

const StyledNotesWrapper = styled.div`
  display: flex;
  margin-right: 30px;
  margin-left: 30px;
  justify-content: space-between;
`;

const StyledNotes = styled.p`
  margin-right: 30px;
  margin-top: 5px;
  width: 70%;
`;

const StyledButton = styled.button`
  height: 30px;
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
`;
