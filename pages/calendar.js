import CalendarFromReact from "../components/CalendarPage/Calendar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CalendarPage({ entries }) {
  return (
    <>
      <Header />
      <CalendarFromReact entries={entries} />
      <Footer />
    </>
  );
}
