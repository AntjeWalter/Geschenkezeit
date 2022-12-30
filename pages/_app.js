import GlobalStyles from "../components/GlobalStyles";
import { useLocalStorage } from "../helpers/hooks";

function MyApp({ Component, pageProps }) {
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

  function handleUpdateEntryNotes(adaptedNotes, id) {
    setEntries(
      entries.map((entry) => {
        if (entry.id === id) {
          return { ...entry, notes: adaptedNotes };
        } else {
          return entry;
        }
      })
    );
  }

  return (
    <>
      <GlobalStyles />
      <Component
        {...pageProps}
        onCreateEntry={handleCreateEntry}
        onUpdateEntry={handleUpdateEntry}
        onDelete={handleDelete}
        onUpdateEntryNotes={handleUpdateEntryNotes}
        entries={entries}
      />
    </>
  );
}

export default MyApp;
