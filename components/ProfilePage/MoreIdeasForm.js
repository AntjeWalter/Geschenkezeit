import { useState } from "react";
import styled from "styled-components";

export default function MoreIdeasForm({
  currentProfile,
  personId,
  onUpdateIdeas,
}) {
  const [edit, setEdit] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const adaptedIdeas = event.target.ideas.value;
    onUpdateIdeas(adaptedIdeas, personId);
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
              aria-label="Ideas for presents"
              defaultValue={currentProfile.ideas}
              placeholder="Geschenkideen"
            ></StyledTextArea>
            <StyledButton type="submit">OK</StyledButton>
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
  margin: 1.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
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
  @media (min-width: 800px) {
    width: 700px;
  }
`;

const StyledButton = styled.button`
  height: 1.8rem;
  width: 1.8rem;
  align-self: center;
  border: none;
  background-color: #fed766;
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
