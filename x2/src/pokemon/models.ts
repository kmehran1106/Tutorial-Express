import { IPokemon } from "./interfaces";
import { model, Schema } from "mongoose";

const PokemonSchema = new Schema({
  name: { type: String, required: [true, "Field is required"] },
  type: { type: String, required: [true, "Field is required"] },
  photo: { type: String, required: [true, "Field is required"] },
  height: { type: Number, required: false },
  weight: { type: Number, required: false },
});

export const Pokemon = model<IPokemon>("Pokemon", PokemonSchema);
