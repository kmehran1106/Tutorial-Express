import { Document } from "mongoose";

export interface IPokemon extends Document {
  name: string;
  type: string;
  photo: string;
  height: number;
  weight: number;
}

