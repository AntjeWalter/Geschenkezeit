import styled from "styled-components";

export default function AssignSelect({ entries, idea, onIdeaAssign }) {
  function handleChange(event) {
    event.preventDefault();
    const assignedName = event.target.value;
    const assignedIdea = idea;
    onIdeaAssign(assignedName, assignedIdea);
  }

  return (
    <StyledSelect onChange={handleChange}>
      <option value="selected">--Wem könnte das gefallen?--</option>
      {entries.map((entry) => (
        <option key={entry.id}>{entry.name}</option>
      ))}
    </StyledSelect>
  );
}

const StyledSelect = styled.select`
  background-color: #f4f4f8;
  color: gray;
  margin: 0 1rem 0 1rem;
  padding: 0.2rem;
  font-family: PTSans;
  border-radius: 3px;
`;
