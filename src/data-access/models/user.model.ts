
import { User } from "@/types/user.type";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema<User>({
  user_id: { type: String, required: true, unique: true },
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  mobileNumber: { type: String, required: true, unique: true },
  age: { type: String },
  bio: { type: String },
  profilePhoto: { type: String },
  status: {
    type: String,
    enum: ["activated", "inactivated", "deactivated"],
  },
  friendRequest: {
    type: String,
    enum: ["requested", "approved", "unfollow", "block", "restrict"],
  },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date },
});

const UserModel = mongoose.model<User>("User", UserSchema);

export default UserModel;

UserSchema.methods.ageCalculation = function () {
  const ageDifMs = Date.now() - this.birthDate.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970).toString();
};

UserSchema.methods.isValidPassword = function () {
  const passwordRegex =
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$";
  return passwordRegex.match(this.password).toString();
};

UserSchema.methods.isValidEmail = function () {
  const emailRegex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$";
  return emailRegex.match(this.email).toString();
};
