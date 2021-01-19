import { Handler } from "../types";

export const home: Handler = (req, res) => {
  res.send("Hello world");
};
