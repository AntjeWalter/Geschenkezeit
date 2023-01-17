import dbConnect from "../../../db/dbConnect";
import Entries from "../../../db/Models/Entries";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const id = req.query.id;
    // const {id} = req.query;

    try {
      const entry = await Entries.findById(id);
      res.status(200).json({
        id: entry._id,
        name: entry.name,
        birthday: entry.birthday,
        difference: entry.difference,
        ideas: entry.ideas,
        notes: entry.notes,
      });
    } catch {
      res.status(400).json({ message: "mistake" });
    }
  }

  if (req.method === "DELETE") {
    const id = req.query.id;

    const result = await Entries.findByIdAndDelete(id);

    if (result) {
      res.status(200).json({ message: "entry deleted" });
    } else {
      res.status(404).json({ message: "document not found" });
    }
  }

  if (req.method === "PUT") {
    const id = req.query.id;

    const updatedEntry = await Entries.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
        birthday: req.body.birthday,
        difference: req.body.difference,
        ideas: req.body.ideas,
        notes: req.body.notes,
      },
      { returnDocument: "after" }
    );

    res.status(200).json(updatedEntry);
  }
}
