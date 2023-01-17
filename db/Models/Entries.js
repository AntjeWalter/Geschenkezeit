import mongoose from "mongoose";

const { Schema } = mongoose;

const entrySchema = new Schema({
  birthday: { type: String, required: true },
  difference: { type: Number, required: false },
  ideas: { type: String, required: false },
  name: { type: String, required: true },
  notes: { type: String, required: false },
});

const Entries =
  mongoose.models.Entries || mongoose.model("Entries", entrySchema);

export default Entries;
