import styled from "styled-components";

export default function Sorting({ onSorting }) {
  function handleChange(event) {
    event.preventDefault();
    const sortBy = event.target.value;
    onSorting(sortBy);
  }

  return (
    <StyledSelect onChange={handleChange}>
      <option value="selected">sortieren nach...</option>
      <option value="date">nächster Geburtstag zuerst</option>
      <option value="alphabet">Alphabet</option>
    </StyledSelect>
  );
}

const StyledSelect = styled.select`
  right: 20px;
  text-align: right;
  width: 125px;
  background-color: #f4f4f8;
  color: gray;
  margin: 1.25rem 0 0.25rem 0;
  padding: 0.2rem;
  font-family: PTSans;
  border-radius: 3px;
`;
