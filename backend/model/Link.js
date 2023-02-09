import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema({
  Longlink: {
    type: String,
    required: [true],
  },
  Shortlink: {
    type: String,
  },
  user_id: {
    type: String,
    required: [true],
    ref: "User",
  },
});

const Link = mongoose.model("Link", LinkSchema);

export default Link;
