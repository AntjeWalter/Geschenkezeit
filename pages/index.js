import BirthdayList from "../components/BirthdayList";
import Header from "../components/Header";
import Input from "../components/Form";
import Footer from "../components/Footer";
import styled from "styled-components";
import { useLocalStorage } from "../helpers/hooks";

export default function Home() {
  const [entries, setEntries] = useLocalStorage("entries", []);

  function handleCreateEntry(newEntry) {
    setEntries([...entries, newEntry]);
  }

  function handleUpdateEntry(editedEntry) {
    setEntries(
      entries.map((entry) => {
        if (entry.id === editedEntry.id) {
          return editedEntry;
        } else {
          return entry;
        }
      })
    );
  }

  function handleDelete(id) {
    const updatedList = entries.filter((entry) => {
      return entry.id !== id;
    });
    setEntries([...updatedList]);
  }

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
            onUpdateEntry={handleUpdateEntry}
            onDelete={handleDelete}
          />
        ))}
      </StyledSection>
      <Input onCreateEntry={handleCreateEntry} />
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
