import styled from "styled-components";

export default function BirthdayList({ id, name, birthday, ideas }) {
  return (
    <StyledEntry>
      <div>{name}</div>
      <div>{ideas.join(", ")}</div>
      <StyledBirthday>{birthday}</StyledBirthday>
    </StyledEntry>
  );
}

const StyledEntry = styled.section`
  display: grid;
  grid-template-columns: 20% 60% 20%;
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
