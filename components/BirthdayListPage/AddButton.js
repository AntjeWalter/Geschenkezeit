import { BiPlusCircle } from "react-icons/bi";
import styled from "styled-components";

export default function AddButton({ onClick }) {
  return (
    <StyledButton onClick={onClick}>
      <BiPlusCircle size="5vh" color="black" />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  position: absolute;
  bottom: 70px;
  right: 20px;
  border: none;
  border-radius: 5px;
  background-color: #fed766;
`;
