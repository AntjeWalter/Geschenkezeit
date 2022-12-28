import GlobalStyles from "../components/GlobalStyles";
import useLocalStorageState from "use-local-storage-state";

function MyApp({ Component, pageProps }) {
  const [entries, setEntries] = useLocalStorageState("entries", {
    defaultValue: [
      { id: 1, name: "Test", birthday: "2022-01-01", ideas: "idea" },
    ],
  });

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
      <GlobalStyles />
      <Component
        {...pageProps}
        onCreateEntry={handleCreateEntry}
        onUpdateEntry={handleUpdateEntry}
        onDelete={handleDelete}
        entries={entries}
      />
    </>
  );
}

export default MyApp;
