export default function birthdayCalculation(entry) {
  const birthDate = entry.birthday;
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;
  const currentDay = now.getDate();
  const birthMonth = birthDate.split("-")[1];
  const birthDay = birthDate.split("-")[2];

  function calculateNextBirthday() {
    if (
      currentMonth < birthMonth ||
      (currentMonth == birthMonth && currentDay < birthDay)
    ) {
      const nextBirthday = new Date(
        currentYear,
        birthDate.split("-")[1] - 1,
        birthDate.split("-")[2]
      );
      return nextBirthday;
    } else {
      const nextBirthday = new Date(
        currentYear + 1,
        birthDate.split("-")[1] - 1,
        birthDate.split("-")[2]
      );
      return nextBirthday;
    }
  }
  const nextBirthday = calculateNextBirthday();
  return nextBirthday;
}
