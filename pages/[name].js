import { useRouter } from "next/router";

export default function ProfilePage({ entries }) {
  const router = useRouter();
  const { name } = router.query;
  const currentProfile = entries.find((entry) => entry.name === name);
  return (
    <>
      <h1>{currentProfile.name}</h1>
      <p>Geburtstag: {currentProfile.birthday}</p>
      <p>wird ... in ... Tagen</p>
      <section>
        <h2>Ideen:</h2>
        <p>{currentProfile.ideas}</p>
      </section>
    </>
  );
}
