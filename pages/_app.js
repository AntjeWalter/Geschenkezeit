import Head from "next/head";
import { differenceInCalendarDays } from "date-fns";
import GlobalStyles from "../components/GlobalStyles";
import birthdayCalculation from "../helpers/birthdayCalculation";
import { useState, useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import fetchData from "../helpers/fetchData";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [entries, setEntries] = useState([]);

  async function getEntries() {
    const entryList = await fetchData("/api/entries");
    setEntries(entryList);
  }

  useEffect(() => {
    getEntries();
  }, []);

  async function handleCreateEntry(newEntry) {
    await fetch("/api/entries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry),
    });
    getEntries();
  }

  async function handleUpdateEntry(editedEntry, id) {
    await fetch("/api/entries/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedEntry, id),
    });
    getEntries();
  }

  async function handleDelete(id) {
    if (confirm(`Möchtest du diese Person löschen?`)) {
      await fetch("/api/entries/" + id, {
        method: "DELETE",
      });
    }
    getEntries();
  }

  async function handleUpdateEntryNotes(adaptedEntryWithNotes, personId) {
    await fetch("/api/entries/" + personId, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adaptedEntryWithNotes),
    });
    getEntries();
  }

  async function handleUpdateIdeas(adaptedEntryWithMoreIdeas, id) {
    await fetch("/api/entries/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adaptedEntryWithMoreIdeas),
    });
    getEntries();
  }

  async function handleIdeaAssign(
    currentEntryId,
    updatedEntryWithAssignedIdea,
    assignedName
  ) {
    if (confirm(`Möchtest du ${assignedName} diese Idee zuweisen?`)) {
      await fetch("/api/entries/" + currentEntryId, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedEntryWithAssignedIdea),
      });
      getEntries();
    }
  }

  // Calculate difference between now and the upcoming birthday
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
  async function handleSorting(sortBy) {
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
    <SessionProvider session={session}>
      <Head>
        <title>Geschenkezeit</title>
      </Head>
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
    </SessionProvider>
  );
}

export default MyApp;
