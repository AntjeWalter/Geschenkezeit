import styled from "styled-components";
import Login from "./Login";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <StyledHeadline>Geschenkezeit</StyledHeadline>
        <Login />
      </StyledHeader>
    </>
  );
}

const StyledHeader = styled.header`
  background-color: var(--blue);
  color: var(--lightgray);
  margin-bottom: 15px;
  padding: 15px;
  position: relative;
  height: 80px;
`;

const StyledHeadline = styled.h1`
  margin: 0;
  text-align: center;
`;
