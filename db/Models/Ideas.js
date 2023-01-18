import mongoose from "mongoose";

const { Schema } = mongoose;

const ideasSchema = new Schema({
  idea: { type: String, required: true },
  user: { type: String, required: true },
});

const Ideas = mongoose.models.Ideas || mongoose.model("Ideas", ideasSchema);

export default Ideas;
