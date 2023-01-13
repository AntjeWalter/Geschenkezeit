import BirthdayList from "../components/BirthdayListPage/BirthdayList";
import Header from "../components/Header";
import Form from "../components/BirthdayListPage/Form";
import Footer from "../components/Footer";
import Sorting from "../components/BirthdayListPage/Sorting";
import styled from "styled-components";
import { Fragment } from "react";

export default function Home({
  entries,
  onCreateEntry,
  onUpdateEntry,
  onDelete,
  onMoreInfo,
  onUpdateEntryNotes,
  onSorting,
}) {
  return (
    <>
      <Header />
      <StyledHeadingContainer>
        <StyledHeading>Geburtstage</StyledHeading>
        <Sorting onSorting={onSorting} />
      </StyledHeadingContainer>
      <StyledSection>
        {entries.map((entry) => (
          <Fragment key={entry.id}>
            <BirthdayList
              id={entry.id}
              name={entry.name}
              birthday={entry.birthday}
              ideas={entry.ideas}
              notes={entry.notes}
              onUpdateEntry={onUpdateEntry}
              onDelete={onDelete}
              onMoreInfo={onMoreInfo}
              onUpdateEntryNotes={onUpdateEntryNotes}
            />
          </Fragment>
        ))}
      </StyledSection>
      <Form onCreateEntry={onCreateEntry} />
      <Footer />
    </>
  );
}

const StyledHeadingContainer = styled.section`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #fe4a49;
  margin: 0.5rem 2rem 0 2rem;
`;

const StyledHeading = styled.h2`
  margin-bottom: 0px;
`;

const StyledSection = styled.section`
  margin-top: 20px;
  margin-bottom: 100px;
`;
