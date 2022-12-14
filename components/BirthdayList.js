//import { listOfBirthdays } from "../public/lib/birthdays";
import styled from "styled-components";

export default function BirthdayList({ id, name, birthday, ideas }) {
  return (
    <StyledTable>
      <tbody key={id}>
        <tr>
          <td>{name}</td>
          <td>{ideas.join(", ")}</td>
          <td>{birthday}</td>
        </tr>
      </tbody>
    </StyledTable>
  );
}

const StyledTable = styled.table`
  font-family: AppleGothic;
  margin: auto;
  width: 90%;
  word-wrap: break-word;
`;
