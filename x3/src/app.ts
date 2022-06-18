import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import cors from "cors";

import { healthController } from "./health/controllers";

dotenv.config();

const app: Express = express();
const port: number = Number(process.env.PORT) || 8500;

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.use("/", healthController);
app.use("/health", healthController);


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running on ${port}!`);
});
