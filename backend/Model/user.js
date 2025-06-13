import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Userschema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: {
      type: String,
      required: true,
      minlenght: 6,
    },
  },
  { timestamps: true }
);

// Create a model for the user schema
export default mongoose.model("User", Userschema);
