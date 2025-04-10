import { Document } from 'mongoose';

export interface IUser extends Document {
  _id: string | number;
  name: string;
  email: string;
  role: "govermentOfficial" | "Journalist" | "citizen";
  password: string;
  nin: string;
}
