export default function AssignSelect({ entries, idea, onIdeaAssign }) {
  function handleChange(event) {
    event.preventDefault();
    const assignedName = event.target.value;
    const assignedIdea = idea;
    onIdeaAssign(assignedName, assignedIdea);
  }

  return (
    <select onChange={handleChange}>
      <option value="selected">---Idee zuweisen---</option>
      {entries.map((entry) => (
        <option key={entry.id}>{entry.name}</option>
      ))}
    </select>
  );
}
