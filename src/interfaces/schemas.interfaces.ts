import { Types, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  password: string;
  email: string;
  role: string;
}

export interface IProfessionalProject extends Document {
  name: string;
  description: string;
  description_fr: string;
  short_description: string;
  short_description_fr: string;
  stack: Types.ObjectId[];
  tasks: Types.ObjectId[];
  date: string;
  image?: string;
  images: string[];
}

export interface IPersonalProject extends Document {
  name: string;
  description: string;
  description_fr: string;
  short_description: string;
  short_description_fr: string;
  stack: Types.ObjectId[];
  features: Types.ObjectId[];
  date: string;
  image?: string;
  images: string[];
  github: string[];
  link?: string;
}

export interface IJob extends Document {
  company: string;
  logo: string;
  title: string;
  title_fr: string;
  startDate: string;
  endDate: string;
  description: string;
  description_fr: string;
}

export interface ICourse extends Document {
  school: string;
  logo: string;
  title: string;
  title_fr: string;
  startDate: string;
  endDate: string;
  description: string;
  description_fr: string;
}

export interface IStack extends Document {
  name: string;
  icon: string;
}

export interface IFeature extends Document {
  name: string;
  name_fr: string;
  description: string;
  description_fr: string;
}

export interface ITask extends Document {
  name: string;
  name_fr: string;
  description: string;
  description_fr: string;
}
