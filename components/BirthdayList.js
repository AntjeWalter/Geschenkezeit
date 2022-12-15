import styled from "styled-components";
import { useState } from "react";

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
    const adaptedBirthday = event.target.adaptedBirthday.value;
    const editedEntry = {
      id,
      name: adaptedName,
      birthday: adaptedBirthday,
      ideas: adaptedIdeas,
    };
    onUpdateEntry(editedEntry);
    setEdit(!edit);
  }

  return (
    <>
      {edit === true ? (
        <StyledEditForm onSubmit={handleEditSubmit}>
          <StyledAdaptedName
            name="adaptedName"
            placeholder="Namen anpassen..."
            required
          ></StyledAdaptedName>
          <StyledAdaptedIdeas
            name="adaptedIdeas"
            placeholder="Ideen anpassen..."
          ></StyledAdaptedIdeas>
          <StyledAdaptedBirthday
            name="adaptedBirthday"
            placeholder="Geburtstag anpassen..."
            required
          ></StyledAdaptedBirthday>
          <StyledSubmitButton type="submit">OK</StyledSubmitButton>
        </StyledEditForm>
      ) : (
        <StyledEntry>
          <div>{name}</div>
          <div>{ideas.join(", ")}</div>
          <StyledBirthday contentEditable="true">{birthday}</StyledBirthday>
          <StyledButtons>
            <StyledEditButton type="button" onClick={() => setEdit(!edit)}>
              ✍🏼
            </StyledEditButton>
            <StyledDeleteButton type="button" onClick={() => onDelete(id)}>
              🗑
            </StyledDeleteButton>
          </StyledButtons>
        </StyledEntry>
      )}
    </>
  );
}

const StyledEditForm = styled.form`
  display: flex;
  margin-left: 25px;
  padding: 5px;
`;

const StyledAdaptedName = styled.input`
  border: none;
  padding: 5px;
  margin: 5px;
  flex-grow: 1;
`;

const StyledAdaptedIdeas = styled.input`
  border: none;
  padding: 5px;
  margin: 5px;
  flex-grow: 1;
`;

const StyledAdaptedBirthday = styled.input`
  border: none;
  padding: 5px;
  margin: 5px;
  flex-grow: 1;
`;

const StyledSubmitButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #fed766;
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
`;

const StyledBirthday = styled.div`
  text-align: right;
`;

const StyledButtons = styled.div`
  text-align: right;
`;

const StyledEditButton = styled.button`
  border: none;
  border-radius: 5px;
  margin: 3px;
  font-size: 1rem;
`;

const StyledDeleteButton = styled.button`
  border: none;
  border-radius: 5px;
  margin: 3px;
  font-size: 1rem;
`;
