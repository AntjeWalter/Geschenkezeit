import { listOfBirthdays } from "../public/lib/birthdays";
import styled from "styled-components";

export default function BirthdayList() {
  const birthdays = listOfBirthdays.map((birthday) => {
    return (
      <tbody key={birthday.id}>
        <tr>
          <td>{birthday.name}</td>
          <td>{[birthday.idea].join(", ")}</td>
          <td>{birthday.birthday}</td>
        </tr>
      </tbody>
    );
  });
  return <StyledTable>{birthdays}</StyledTable>;
}

const StyledTable = styled.table`
  font-family: AppleGothic;
  margin: auto;
  width: 90%;
  word-break: break-all;
`;
