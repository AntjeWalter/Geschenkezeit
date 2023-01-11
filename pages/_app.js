import { NEXT_CLIENT_SSR_ENTRY_SUFFIX } from "next/dist/shared/lib/constants";
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

  function handleUpdateIdeas(adaptedIdeas, id) {
    setEntries(
      entries.map((entry) => {
        if (entry.id === id) {
          return { ...entry, ideas: adaptedIdeas };
        } else {
          return entry;
        }
      })
    );
  }

  function handleIdeaAssign(assignedName, assignedIdea) {
    if (confirm("Möchtest du dieser Person diese Idee zuweisen?")) {
      setEntries(
        entries.map((entry) => {
          const newIdeaKey = !entry.ideas
            ? assignedIdea
            : entry.ideas + ", " + assignedIdea;
          if (assignedName === entry.name) {
            return { ...entry, ideas: newIdeaKey };
          } else {
            return entry;
          }
        })
      );
    }
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
        onUpdateIdeas={handleUpdateIdeas}
        onIdeaAssign={handleIdeaAssign}
        entries={entries}
      />
    </>
  );
}

export default MyApp;
