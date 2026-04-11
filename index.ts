import {config} from "./config/config";
const express = require("express");
const app = express();

app.get("/posts", (req: any, res: any) => {
  res.send("here are ellies posts");
});

app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});