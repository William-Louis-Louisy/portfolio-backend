import bcrypt from "bcrypt";
import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/schemas.interfaces";

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String },
  role: { type: String, required: true },
});

// Middleware to hash password before saving
UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// STATIC METHODS
interface IUserModel extends mongoose.Model<IUser> {
  login(email: string, password: string): Promise<IUser>;
}

UserSchema.statics.login = async function (email: string, password: string) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw new Error("Incorrect password");
  }
  throw new Error("Incorrect email");
};

export default mongoose.model<IUser, IUserModel>("User", UserSchema);
