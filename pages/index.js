import BirthdayList from "../components/BirthdayList";
import Header from "../components/Header";
import Input from "../components/Form";
import Footer from "../components/Footer";
import styled from "styled-components";

export default function Home({
  entries,
  onCreateEntry,
  onUpdateEntry,
  onDelete,
}) {
  return (
    <>
      <Header />
      <StyledHeading>Geburtstage</StyledHeading>
      <StyledSection>
        {entries.map((entry) => (
          <BirthdayList
            key={entry.id}
            id={entry.id}
            name={entry.name}
            birthday={entry.birthday}
            ideas={entry.ideas}
            onUpdateEntry={onUpdateEntry}
            onDelete={onDelete}
          />
        ))}
      </StyledSection>
      <Input onCreateEntry={onCreateEntry} />
      <Footer />
    </>
  );
}

const StyledHeading = styled.h2`
  font-family: AppleGothic;
  margin-left: 30px;
  margin-right: 30px;
  border-bottom: 2px solid #fe4a49;
`;

const StyledSection = styled.section`
  margin-bottom: 150px;
`;
