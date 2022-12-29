import styled from "styled-components";

export default function MoreInfoForm({ onAddNotes, personId, currentProfile }) {
  function handleSubmitNotes(event) {
    event.preventDefault();
    const personNotes = event.target.notes.value;
    onAddNotes(personNotes, personId);
  }

  return (
    <>
      <StyledInfo>Notizen zur Person</StyledInfo>
      <p>{currentProfile.notes}</p>
      <StyledForm onSubmit={handleSubmitNotes}>
        <textarea
          type="text"
          name="notes"
          placeholder="Was die Person mag und was nicht"
        ></textarea>
        <button type="submit">OK</button>
      </StyledForm>
    </>
  );
}

const StyledInfo = styled.h3`
  margin-top: 30px;
  margin-left: 30px;
  font-size: 1rem;
`;

const StyledForm = styled.form`
  margin-left: 30px;
`;
