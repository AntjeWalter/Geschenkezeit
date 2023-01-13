import { differenceInCalendarDays } from "date-fns";
import GlobalStyles from "../components/GlobalStyles";
import { useLocalStorage } from "../helpers/hooks";
import birthdayCalculation from "../helpers/birthdayCalculation";

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
    if (confirm(`Möchtest du ${assignedName} diese Idee zuweisen?`)) {
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

  // Calculate difference between now and the upcoming birthda<
  function calculateDifference(entry) {
    const now = new Date();
    const nextBirthday = birthdayCalculation(entry);
    const difference = differenceInCalendarDays(nextBirthday, now);
    return difference;
  }

  //Add calculated difference to each entry-object
  const entriesWithDifference = entries.map((entry) => {
    return { ...entry, difference: calculateDifference(entry) };
  });

  //Sorting the entries by next birthday or alphabetically
  function handleSorting(sortBy) {
    if (sortBy === "date") {
      const sortedByDate = entriesWithDifference.slice().sort((a, b) => {
        const difference1 = a.difference;
        const difference2 = b.difference;
        return difference1 - difference2;
      });
      setEntries(sortedByDate);
    } else if (sortBy === "alphabet") {
      const sortedByAlphabet = entries.slice().sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      setEntries(sortedByAlphabet);
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
        onSorting={handleSorting}
        entries={entries}
      />
    </>
  );
}

export default MyApp;
