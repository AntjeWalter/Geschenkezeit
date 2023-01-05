import React from "react";
import Calendar from "react-calendar";

export default function CalendarFromReact({ entries }) {
  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const selectedDay = date.getDate();
      const selectedMonth = date.getMonth() + 1;

      const hasBirthday = entries.find((entry) => {
        const birthDay = entry.birthday.split("-")[2];
        const birthMonth = entry.birthday.split("-")[1];
        return selectedDay == birthDay && selectedMonth == birthMonth;
      });

      if (hasBirthday) {
        return <p>🎁</p>;
      }
    }
  };

  return (
    <>
      <Calendar locale="de-DE" tileContent={tileContent} />
    </>
  );
}
