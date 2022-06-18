import { Request, Response } from "express";

import { Pokemon } from "./models";

export class PokemonProvider {
  public list = (_: Request, res: Response) => {
    const welcomeMessage = "Calling the API for list!";
    res.send(welcomeMessage);
  };
}
