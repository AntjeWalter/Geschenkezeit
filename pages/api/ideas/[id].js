import dbConnect from "../../../db/dbConnect";
import Ideas from "../../../db/Models/Ideas";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const id = req.query.id;

    try {
      const idea = await Ideas.findById(id);
      res.status(200).json({
        idea: idea.idea,
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

    const updatedIdea = await Ideas.findByIdAndUpdate(
      id,
      {
        idea: req.body.idea,
      },
      { returnDocument: "after" }
    );

    res.status(200).json(updatedIdea);
  }
}
