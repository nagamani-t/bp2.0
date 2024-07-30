import { type Client } from "@/domain/client/client.types";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema<Client>({
  user_id: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  mobileNumber: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  status: {
    type: String,
    enum: ["activated", "inactivated", "deactivated"],
  },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date },
});

const ClientModel = mongoose.model<Client>("Client", UserSchema);

export default ClientModel;
