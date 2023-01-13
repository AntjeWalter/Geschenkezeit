import CalendarFromReact from "../components/CalendarPage/Calendar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

export default function CalendarPage({ entries }) {
  return (
    <>
      <Header />
      <CalendarFromReact entries={entries} />
      <StyledFooter>
        <Footer />
      </StyledFooter>
    </>
  );
}

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
`;
