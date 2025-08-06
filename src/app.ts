import express, { Application } from "express";

const app: Application = express();

const PORT: number = 5000;

app.listen(PORT, () => console.log(`PORT is running on ${PORT}`));
