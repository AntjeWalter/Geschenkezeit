import { BiPlusCircle } from "react-icons/bi";
import styled from "styled-components";

export default function AddButton({ onClick }) {
  return (
    <StyledButton onClick={onClick}>
      <BiPlusCircle size="35px" color="black" />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  margin-right: 5px;
  border: none;
  border-radius: 5px;
  background-color: #fed766;
`;