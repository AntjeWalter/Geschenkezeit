import BirthdayList from "../components/BirthdayListPage/BirthdayList";
import Header from "../components/Header";
import Form from "../components/BirthdayListPage/Form";
import Footer from "../components/Footer";
import Sorting from "../components/BirthdayListPage/Sorting";
import styled from "styled-components";
import { Fragment } from "react";
import { useSession } from "next-auth/react";
import Lottie from "lottie-react";
import Empty_BirthdayList from "../public/assets/Empty_BirthdayList.json";

export default function Home({
  entries,
  onCreateEntry,
  onUpdateEntry,
  onDelete,
  onMoreInfo,
  onUpdateEntryNotes,
  onSorting,
}) {
  const { data: session } = useSession();
  console.log("testi");

  return (
    <>
      <Header />
      {session && (
        <>
          <StyledHeadingContainer>
            <StyledHeading>Geburtstage</StyledHeading>
            <Sorting onSorting={onSorting} />
          </StyledHeadingContainer>
          <StyledSection>
            {entries.length === 0 ? (
              <>
                <StyledEmptyState>
                  Es sind noch keine Geburtstage gespeichert...
                </StyledEmptyState>
                <Lottie animationData={Empty_BirthdayList} loop={true} />
              </>
            ) : (
              entries.map((entry) => (
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
              ))
            )}
          </StyledSection>
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

const StyledSection = styled.section`
  margin-top: 20px;
  margin-bottom: 100px;
`;

const StyledEmptyState = styled.p`
  display: block;
  text-align: center;
  margin: 0 20px;
  font-size: 1.1rem;
`;

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
`;
