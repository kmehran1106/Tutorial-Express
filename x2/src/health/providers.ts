import { Request, Response } from "express";

export class HealthProvider {
  public healthCheck = (_: Request, res: Response) => {
    res.send("Our server is healthy!");
  };
}
