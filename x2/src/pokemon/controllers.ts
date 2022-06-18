import { Router } from "express";

import { PokemonProvider } from "./providers";

export class PokemonController {
  public router = Router();

  private pokemonProvider = new PokemonProvider();

  constructor() {
    this.setRoutes();
  }

  public setRoutes() {
    this.router.get("/", this.pokemonProvider.list);
  }
}
