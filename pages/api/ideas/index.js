import dbConnect from "../../../db/dbConnect";
import Ideas from "../../../db/Models/Ideas";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const ideas = await Ideas.find();
    const ideasArray = ideas.map((idea) => {
      return {
        id: idea._id,
        idea: idea.idea,
      };
    });

    res.status(200).json(ideasArray);
  }

  if (req.method === "POST") {
    const data = req.body;
    try {
      const newIdea = await Ideas.create(data);

      return res.status(201).json(newIdea);
    } catch (error) {
      return res.status(404).json({ error });
    }
  }
}
