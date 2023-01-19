import { BiPlusCircle } from "react-icons/bi";
import styled from "styled-components";

export default function AddButton({ onClick }) {
  return (
    <StyledButton onClick={onClick} aria-label="Formular öffnen">
      <BiPlusCircle size="35px" color="black" />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  margin-right: 5px;
  border: none;
  border-radius: 5px;
  background-color: var(--yellow);
  position: fixed;
  bottom: 60px;
  right: 5px;
  padding-top: 3px;
  box-shadow: 5px 5px 10px -3px #a6a6a6;
  @media (min-width: 800px) {
    position: absolute;
  }
`;
