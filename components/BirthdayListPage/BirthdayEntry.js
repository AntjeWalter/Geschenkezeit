import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";
import format from "date-fns/format";
import { BsTrash2, BsPencil } from "react-icons/bs";

export default function BirthdayEntry({
  id,
  name,
  birthday,
  ideas,
  notes,
  onUpdateEntry,
  onDelete,
}) {
  const [edit, setEdit] = useState(false);

  function handleEditSubmit(event) {
    event.preventDefault();
    const adaptedName = event.target.adaptedName.value;
    const adaptedIdeas = event.target.adaptedIdeas.value;
    const adaptedBirthday = event.target.adaptedBirthday.value;

    const editedEntry = {
      id,
      name: adaptedName,
      birthday: adaptedBirthday,
      ideas: adaptedIdeas,
      notes,
    };
    onUpdateEntry(editedEntry, id);
    setEdit(!edit);
  }

  //If the edit-state is true after clicking edit-button, the edit input fields will open up. Otherwise, the entries are displayed in their original state.
  return (
    <>
      {edit === true ? (
        <StyledEditForm onSubmit={handleEditSubmit}>
          <StyledAdaptedInput
            name="adaptedName"
            aria-label="Bearbeiteter Name"
            defaultValue={name}
            required
          ></StyledAdaptedInput>
          <StyledAdaptedInput
            name="adaptedIdeas"
            aria-label="Bearbeitete Ideen"
            defaultValue={ideas}
          ></StyledAdaptedInput>
          <StyledAdaptedInput
            type="date"
            name="adaptedBirthday"
            aria-label="Bearbeiteter Geburtstag"
            defaultValue={birthday}
            required
          ></StyledAdaptedInput>
          <StyledSubmitButton type="submit">OK</StyledSubmitButton>
        </StyledEditForm>
      ) : (
        <StyledEntry data-testid="entry">
          <StyledLink href={`/${id}`}>
            <p>{name}</p>
            <p>{ideas}</p>
            <StyledTextAlign>
              {format(new Date(birthday), "dd.MM.yyyy")}
            </StyledTextAlign>
          </StyledLink>
          <StyledTextAlign>
            <StyledButton
              type="button"
              aria-label="Bearbeiten-Button"
              onClick={() => setEdit(!edit)}
            >
              <BsPencil />
            </StyledButton>
            <StyledButton
              type="button"
              aria-label="Löschen-Button"
              onClick={() => onDelete(id)}
            >
              <BsTrash2 />
            </StyledButton>
          </StyledTextAlign>
        </StyledEntry>
      )}
    </>
  );
}

const StyledEditForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin-left: 25px;
  margin-right: 25px;
  padding: 5px;
`;

const StyledAdaptedInput = styled.input`
  border: none;
  padding: 5px;
  margin: 5px;
  flex-grow: 1;
`;

const StyledSubmitButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: var(--yellow);
  flex-grow: 1;
  padding: 5px;
`;

const StyledEntry = styled.section`
  display: grid;
  grid-template-columns: 80% 20%;
  margin: auto;
  margin-bottom: 10px;
  padding: 15px;
  width: 90%;
  word-wrap: break-word;
  background-color: var(--darkgray);
  border-radius: 5px;
  align-items: center;
  box-shadow: 5px 5px 10px -5px #c4c4c7;
`;

const StyledLink = styled(Link)`
  display: grid;
  grid-template-columns: 30% 40% 30%;
  text-decoration: none;
  color: black;
  p {
    align-self: center;
  }
`;

const StyledTextAlign = styled.div`
  text-align: right;
  align-self: center;
  word-wrap: break-word;
  font-size: 0.8rem;
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  margin: 3px;
  font-size: 1.25rem;
`;
