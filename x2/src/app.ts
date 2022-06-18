import express, { Application } from "express";

import bodyParser from "body-parser";
import cors from "cors";

import { HealthController } from "./health/controllers";
import { PokemonController } from "./pokemon/controllers";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.setConfig();
    this.setControllers();
  }

  private setConfig() {
    this.app.use(bodyParser.json({ limit: "50mb" }));
    this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
    this.app.use(cors());
  }

  private setControllers() {
    const healthController = new HealthController();
    const pokemonController = new PokemonController();


    this.app.use("/", healthController.router);
    this.app.use("/pokemon", pokemonController.router);
  }
}

export default new App().app;
