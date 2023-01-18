import BirthdayList from "../components/BirthdayListPage/BirthdayList";
import Header from "../components/Header";
import Form from "../components/BirthdayListPage/Form";
import Footer from "../components/Footer";
import Sorting from "../components/BirthdayListPage/Sorting";
import styled from "styled-components";
import { Fragment } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { FiLogOut, FiLogIn } from "react-icons/fi";

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

  return (
    <>
      <Header />
      <StyledLogin>
        {session ? (
          <StyledLogOutButton onClick={signOut}>
            <FiLogOut size="20px" />
          </StyledLogOutButton>
        ) : (
          <>
            <StyledLogInButton onClick={() => signIn("github")}>
              <FiLogIn /> Einloggen
            </StyledLogInButton>
            <StyledLogInFooter />
          </>
        )}
      </StyledLogin>
      {session && (
        <>
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
          <StyledFooter>
            <Form onCreateEntry={onCreateEntry} />
            <Footer />
          </StyledFooter>
        </>
      )}
    </>
  );
}

const StyledLogin = styled.section`
  text-align: right;
  margin-right: 2rem;
`;

const StyledLogInFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  text-align: center;
  background-color: #2ab7ca;
  color: #f4f4f8;
  margin-block: 0px;
  padding: 10px;
  width: 100vw;
  height: 50px;
  max-width: 800px;
  position: fixed;
  bottom: 0;
`;

const StyledLogOutButton = styled.button`
  border: none;
  border-radius: 5px;
  padding-top: 3px;
  margin-top: 10px;
  font-family: PTSans;
`;

const StyledLogInButton = styled.button`
  margin-top: 10px;
  background-color: #fed766;
  border: none;
  border-radius: 3px;
  padding: 5px;
  font-size: 1rem;
`;

const StyledHeadingContainer = styled.section`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #fe4a49;
  margin: 0 2rem 0 2rem;
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

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
`;
