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
  return (
    <>
      <StyledSection>
        <StyledHeading>Geburtstage</StyledHeading>
        <StyledTable>{birthdays}</StyledTable>
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  position: relative;
`;

const StyledHeading = styled.h2`
  font-family: AppleGothic;
  margin-left: 30px;
  margin-right: 30px;
  border-bottom: 2px solid #fe4a49;
`;

const StyledTable = styled.table`
  font-family: AppleGothic;
  margin: auto;
  width: 90%;
`;
