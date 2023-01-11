import "./configs/env.js";
import express from "express";
import { newSeq } from "./configs/database.js";

const app = express();

console.log(newSeq);

// start server
app.listen(process.env.API_PORT, () => {
  console.log(`Express API is listening on port ${process.env.API_PORT}`);
});
