import BirthdayList from "../components/BirthdayList";
import Header from "../components/Header";
import Input from "../components/Form";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Fragment } from "react";

export default function Home({
  entries,
  onCreateEntry,
  onUpdateEntry,
  onDelete,
  onMoreInfo,
}) {
  return (
    <>
      <Header />
      <StyledHeading>Geburtstage</StyledHeading>
      <StyledSection>
        {entries.map((entry) => (
          <Fragment key={entry.id}>
            <BirthdayList
              id={entry.id}
              name={entry.name}
              birthday={entry.birthday}
              ideas={entry.ideas}
              onUpdateEntry={onUpdateEntry}
              onDelete={onDelete}
              onMoreInfo={onMoreInfo}
            />
          </Fragment>
        ))}
      </StyledSection>
      <Input onCreateEntry={onCreateEntry} />
      <Footer />
    </>
  );
}

const StyledHeading = styled.h2`
  margin-left: 30px;
  margin-right: 30px;
  border-bottom: 2px solid #fe4a49;
`;

const StyledSection = styled.section`
  margin-bottom: 150px;
`;
