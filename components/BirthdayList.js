//import { listOfBirthdays } from "../public/lib/birthdays";
import styled from "styled-components";

export default function BirthdayList({ id, name, birthday, ideas }) {
  return (
    <StyledTable>
      <StyledName>{name}</StyledName>
      <StyledIdeas>{ideas.join(", ")}</StyledIdeas>
      <StyledBirthday>{birthday}</StyledBirthday>
    </StyledTable>
  );
}

const StyledTable = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-template-areas: "a b c";
  font-family: AppleGothic;
  margin: auto;
  margin-bottom: 10px;
  width: 90%;
  word-wrap: break-word;
  background-color: #e6e6ea;
  padding: 15px;
  border-radius: 5px;
`;

const StyledName = styled.div`
  grid-area: "a";
`;

const StyledIdeas = styled.div`
  grid-area: "b";
`;

const StyledBirthday = styled.div`
  grid-area: "c";
  text-align: right;
`;
