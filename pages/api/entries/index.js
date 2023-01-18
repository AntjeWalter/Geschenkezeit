import dbConnect from "../../../db/dbConnect";
import Entries from "../../../db/Models/Entries";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const entries = await Entries.find();
    const entriesArray = entries.map((entry) => {
      return {
        id: entry._id,
        name: entry.name,
        birthday: entry.birthday,
        ideas: entry.ideas,
        notes: entry.notes,
      };
    });

    res.status(200).json(entriesArray);
  }

  if (req.method === "POST") {
    const data = req.body;

    try {
      const newEntry = await Entries.create(data);

      return res.status(201).json(newEntry);
    } catch (error) {
      return res.status(404).json({ error });
    }
  }
}
