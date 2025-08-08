import express, { Application, Request, Response } from "express";
import connectDB from "./config/database";
import Widget from "./modules/widget";

const app: Application = express();
app.use(express.json());

app.get("/widgets", async (req: Request, res: Response) => {
  try {
    const widgetList = await Widget.find({});
    res.json({ message: widgetList });
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send("ERROR::" + error.message);
    } else {
      res.status(404).send("ERROR: An unknown error occured");
    }
  }
});

app.post("/widgets", async (req: Request, res: Response) => {
  try {
    const { location } = req.body;
    const widget = new Widget({
      location: location,
    });
    const widgetList = await widget.save();
    res.json({ title: "Widget added sucessfully", message: widgetList });
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send("ERROR::" + error.message);
    } else {
      res.status(404).send("ERROR: An unknown error occured");
    }
  }
});

const PORT: number = 5000;

connectDB()
  .then(() => {
    console.log("Database connection establised");
    app.listen(PORT, () => console.log(`PORT is running on ${PORT}`));
  })
  .catch((err: any) => {
    console.log(err);
  });
