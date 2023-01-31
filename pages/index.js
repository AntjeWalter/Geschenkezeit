import BirthdayList from "../components/BirthdayListPage/BirthdayList";
import Header from "../components/Header";
import Form from "../components/BirthdayListPage/Form";
import Footer from "../components/Footer";
import Sorting from "../components/BirthdayListPage/Sorting";
import styled from "styled-components";
import { useSession } from "next-auth/react";

export default function Home({ entries, onCreateEntry, onSorting }) {
  const { data: session } = useSession();

  return (
    <>
      <Header />
      {session && (
        <>
          <StyledHeadingContainer>
            <StyledHeading>Geburtstage</StyledHeading>
            <Sorting onSorting={onSorting} />
          </StyledHeadingContainer>
          <BirthdayList entries={entries} />
          <StyledFooter>
            <Form onCreateEntry={onCreateEntry} />
            <Footer />
          </StyledFooter>
        </>
      )}
    </>
  );
}

const StyledHeadingContainer = styled.section`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid var(--red);
  margin: 0 2rem;
  height: auto;
`;

const StyledHeading = styled.h2`
  margin-bottom: 0px;
  margin-top: 10px;
`;

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
`;
