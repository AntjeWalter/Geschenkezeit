import styled from "styled-components";

export default function AssignSelect({ entries, idea, onIdeaAssign }) {
  function handleChange(event) {
    event.preventDefault();
    const assignedName = event.target.value;
    const assignedIdea = idea;
    const currentEntry = entries.find((entry) => entry.name === assignedName);
    const currentEntryId = currentEntry.id;
    const updatedEntryWithAssignedIdea = {
      ...currentEntry,
      ideas:
        currentEntry.ideas === ""
          ? assignedIdea
          : currentEntry.ideas + ", " + assignedIdea,
    };
    onIdeaAssign(currentEntryId, updatedEntryWithAssignedIdea, assignedName);
    event.target.value = "selected";
  }

  return (
    <StyledSelect onChange={handleChange} aria-label="Zu Person zuordnen">
      <option value="selected">--Wem könnte das gefallen?--</option>
      {entries.map((entry) => (
        <option key={entry.id}>{entry.name}</option>
      ))}
    </StyledSelect>
  );
}

const StyledSelect = styled.select`
  background-color: var(--lightgray);
  color: gray;
  margin: 0 1rem 0 1rem;
  padding: 0.2rem;
  font-family: PTSans;
  border-radius: 3px;
`;
