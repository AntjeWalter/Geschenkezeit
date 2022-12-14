import { listOfBirthdays } from "../public/lib/birthdays";
import { nanoid } from "nanoid";

export default function Input({ onCreateEntry }) {
  function handleSubmit(event) {
    event.preventDefault();
    const nameInput = event.target.name.value;
    const ideaInput = event.target.idea.value;
    const dateInput = event.target.date.value;
    const newEntry = {
      id: nanoid(),
      name: nameInput,
      birthday: dateInput,
      ideas: ideaInput,
    };
    onCreateEntry(newEntry);
  }

  return (
    <form>
      <input type="text" placeholder="Name" name="name"></input>
      <input type="text" placeholder="Geschenkideen" name="idea"></input>
      <input type="date" placeholder="Geburtstag" name="date" />
      <button type="submit" onSubmit={handleSubmit}>
        Hinzufügen
      </button>
    </form>
  );
}
