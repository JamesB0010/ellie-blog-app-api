import {config} from "./config/config";
import {Application} from "express";
import {Databased} from "./Databased";

const express = require("express");
const app: Application = express();
const databse = new Databased();

app.get("/posts", async (req: any, res: any) => {
    const posts = await databse.getPosts();
    res.send(posts);
});

app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});