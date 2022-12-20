import styled from "styled-components";
import { useState } from "react";
import format from "date-fns/format";
import Link from "next/link";

export default function BirthdayList({
  id,
  name,
  birthday,
  ideas,
  onUpdateEntry,
  onDelete,
}) {
  const [edit, setEdit] = useState(false);

  function handleEditSubmit(event) {
    event.preventDefault();
    const adaptedName = event.target.adaptedName.value;
    const adaptedIdeas = event.target.adaptedIdeas.value;
    const adaptedBirthday = format(
      new Date(event.target.adaptedBirthday.value),
      "dd'.'MM'.'yyyy"
    );
    const editedEntry = {
      id,
      name: adaptedName,
      birthday: adaptedBirthday,
      ideas: adaptedIdeas,
    };
    onUpdateEntry(editedEntry);
    setEdit(!edit);
  }

  //If the edit-state is true after clicking edit-button, the edit input fields will open up. Otherwise, the entries are displayed in their original state.
  return (
    <>
      {edit === true ? (
        <StyledEditForm onSubmit={handleEditSubmit}>
          <StyledAdaptedInput
            name="adaptedName"
            aria-label="Edited Name"
            defaultValue={name}
            required
          ></StyledAdaptedInput>
          <StyledAdaptedInput
            name="adaptedIdeas"
            aria-label="Edited Ideas"
            defaultValue={ideas}
          ></StyledAdaptedInput>
          <StyledAdaptedInput
            type="date"
            name="adaptedBirthday"
            aria-label="Edited Birthday"
            defaultValue={birthday}
            required
          ></StyledAdaptedInput>
          <StyledSubmitButton type="submit">OK</StyledSubmitButton>
        </StyledEditForm>
      ) : (
        <StyledEntry>
          <Link href={`/${name}`}>
            <div>{name}</div>
            <div>{ideas}</div>
            <StyledTextAlign>{birthday}</StyledTextAlign>
          </Link>
          <StyledTextAlign>
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
              onClick={() => onDelete(id)}
            >
              🗑
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
  padding: 5px;
  margin-right: 25px;
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
  background-color: #fed766;
  flex-grow: 1;
  padding: 5px;
`;

const StyledEntry = styled.section`
  display: grid;
  grid-template-columns: 20% 40% 20% 20%;
  font-family: AppleGothic;
  margin: auto;
  margin-bottom: 10px;
  width: 90%;
  word-wrap: break-word;
  background-color: #e6e6ea;
  padding: 15px;
  border-radius: 5px;
  align-items: center;
  font-size: 0.9rem;
  text-decoration: none;
  color: black;
`;

const StyledTextAlign = styled.div`
  text-align: right;
  word-wrap: break-word;
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  margin: 3px;
  font-size: 1rem;
`;
