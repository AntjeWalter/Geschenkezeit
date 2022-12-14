//import { listOfBirthdays } from "../public/lib/birthdays";
import styled from "styled-components";

export default function BirthdayList({ id, name, birthday, ideas }) {
  return (
    <StyledTable>
      <tbody key={id}>
        <StyledTableData>
          <td>{name}</td>
          <td>{ideas.join(", ")}</td>
          <StyledBirthday>{birthday}</StyledBirthday>
        </StyledTableData>
      </tbody>
    </StyledTable>
  );
}

const StyledTable = styled.table`
  font-family: AppleGothic;
  margin: auto;
  width: 90%;
  word-wrap: break-word;
  background-color: #e6e6ea;
  padding: 5px;
  border: 5px solid #f4f4f8;
`;

const StyledTableData = styled.td`
  border-collapse: separate;
  border-spacing: 1.5em;
`;

const StyledBirthday = styled.td`
  text-align: right;
`;
