import CalendarFromReact from "../components/CalendarPage/Calendar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useSession } from "next-auth/react";

export default function CalendarPage({ entries }) {
  const { data: session } = useSession();
  return (
    <>
      <Header />
      {session && (
        <>
          <CalendarFromReact entries={entries} />
          <StyledFooter>
            <Footer />
          </StyledFooter>
        </>
      )}
    </>
  );
}

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
`;
