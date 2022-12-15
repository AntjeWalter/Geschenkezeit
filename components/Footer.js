import styled from "styled-components";

export default function Footer() {
  return (
    <div>
      <StyledFooter>Geburtstagskinder</StyledFooter>
    </div>
  );
}

const StyledFooter = styled.h2`
  font-family: AppleGothic;
  text-align: center;
  background-color: #2ab7ca;
  color: #f4f4f8;
  margin-block: 0px;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100vw;
  max-width: 800px;
`;
