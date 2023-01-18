import dbConnect from "../../../db/dbConnect";
import Ideas from "../../../db/Models/Ideas";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  await dbConnect();

  const session = await getSession({ req });
  const email = session?.user.email;

  if (!email) {
    return res.status(401).json({ message: "Bitte erneut einloggen" });
  }

  if (req.method === "GET") {
    const ideas = await Ideas.find({ user: email });
    const ideasArray = ideas.map((idea) => {
      return {
        id: idea._id,
        idea: idea.idea,
        user: idea.user,
      };
    });

    res.status(200).json(ideasArray);
  }

  if (req.method === "POST") {
    const data = { ...req.body, user: email };
    try {
      const newIdea = await Ideas.create(data);

      return res.status(201).json(newIdea);
    } catch (error) {
      return res.status(404).json({ error });
    }
  }
}
