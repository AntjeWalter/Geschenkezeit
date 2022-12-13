import BirthdayList from "../components/BirthdayList";
import Header from "../components/Header";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Header />
      <StyledHeading>Geburtstage</StyledHeading>
      <BirthdayList />
    </>
  );
}

const StyledHeading = styled.h2`
  font-family: AppleGothic;
  margin-left: 30px;
  margin-right: 30px;
  border-bottom: 2px solid #fe4a49;
`;
