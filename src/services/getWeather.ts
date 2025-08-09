import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;

export const getWeather = async (city: string) => {
  try {
    const response = await axios.get(BASE_URL + city + "&appid=" + API_KEY);
    return response.data;
  } catch (error: any) {
    throw new Error("Failed to fetch weather data: " + error.message);
  }
};
