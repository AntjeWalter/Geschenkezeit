import dbConnect from "../../../db/dbConnect";
import Entries from "../../../db/Models/Entries";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  await dbConnect();

  const session = await getSession({ req });
  const email = session?.user.email;

  if (!email) {
    return res.status(401).json({ message: "Bitte erneut einloggen" });
  }

  if (req.method === "GET") {
    const entries = await Entries.find({ user: email });
    const entriesArray = entries.map((entry) => {
      return {
        id: entry._id,
        name: entry.name,
        birthday: entry.birthday,
        ideas: entry.ideas,
        notes: entry.notes,
        user: entry.user,
      };
    });

    res.status(200).json(entriesArray);
  }

  if (req.method === "POST") {
    const data = { ...req.body, user: email };

    try {
      const newEntry = await Entries.create(data);

      return res.status(201).json(newEntry);
    } catch (error) {
      return res.status(404).json({ error });
    }
  }
}
