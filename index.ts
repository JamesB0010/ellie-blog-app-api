import {config} from "./config/config";
const express = require("express");
const app = express();

app.get("/", (req: any, res: any) => {
  res.send("Hello, world!");
});

app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});