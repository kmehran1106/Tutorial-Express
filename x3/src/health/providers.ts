import { Request, Response } from "express";


export const checkHealth = (_: Request, res: Response) => {
  res.send("Our server is healthy!");
}
