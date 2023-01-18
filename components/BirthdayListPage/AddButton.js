import { BiPlusCircle } from "react-icons/bi";
import styled from "styled-components";

export default function AddButton({ onClick }) {
  return (
    <StyledButton onClick={onClick} aria-label="Open input">
      <BiPlusCircle size="35px" color="black" />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  margin-right: 5px;
  border: none;
  border-radius: 5px;
  background-color: #fed766;
  position: fixed;
  bottom: 60px;
  right: 5px;
  padding-top: 3px;
  box-shadow: 5px 5px 15px -3px #a6a6a6;
  @media (min-width: 800px) {
    position: absolute;
  }
`;
