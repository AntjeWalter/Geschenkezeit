import { listOfBirthdays } from "../public/lib/birthdays";
import styled from "styled-components";

export default function BirthdayList() {
  const birthdays = listOfBirthdays.map((birthday) => {
    return (
      <tr>
        <td>{birthday.name}</td>
        <td>{birthday.birthday}</td>
      </tr>
    );
  });
  return <StyledTable>{birthdays}</StyledTable>;
}

const StyledTable = styled.table`
  font-family: AppleGothic;
  margin: auto;
  width: 90%;
`;
