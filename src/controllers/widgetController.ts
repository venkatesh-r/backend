import { Request, Response } from "express";
import Widget from "../modules/widget";
import { getWeather } from "../services/getWeather";

export const getWidgets = async (req: Request, res: Response) => {
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
};

export const postWidgets = async (req: Request, res: Response) => {
  try {
    const { location } = req.body;
    const widget = new Widget({
      location: location,
    });
    const widgetSaved = await widget.save();
    const weatherData = await getWeather(location);

    res.json({
      title: "Widget added sucessfully",
      widget: widgetSaved,
      weather: weatherData,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send("ERROR::" + error.message);
    } else {
      res.status(404).send("ERROR: An unknown error occured");
    }
  }
};

export const deleteWidget = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedWidget = await Widget.findOneAndDelete({ _id: id });
    res.json({ message: deletedWidget });
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send("ERROR::" + error.message);
    } else {
      res.status(404).send("ERROR: An unknown error occured");
    }
  }
};
