import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: String,
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  avatar: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  age: Number,
  language: String,
  simulator: { type: String, required: true },
  car: { type: String, required: true },
  circuit: { type: String, required: true },
});

const User = mongoose.model("User", userSchema, "SimRacers");

export default User;
