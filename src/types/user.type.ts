import { type Static, Type } from "@sinclair/typebox";

export const UserSchema = Type.Object({
  user_id: Type.Object(Type.String()),
  userName: Type.Optional(Type.String()),
  email: Type.Optional(Type.String()),
  password: Type.Optional(Type.String()),
  profilePhoto: Type.Optional(Type.String()),
  age: Type.Optional(Type.String()),
  bio: Type.Optional(Type.String()),
  status: Type.Optional(Type.String()),
  friendRequest: Type.Optional(Type.String()),
  mobileNumber: Type.Optional(Type.String()),
  isDeleted: Type.Optional(Type.Boolean()),
  updatedAt: Type.Optional(Type.Date()),
  createdAt: Type.Optional(Type.Date()),
  deletedAt:Type.Optional(Type.Date()),
 
});

export type User = Static<typeof UserSchema >;
