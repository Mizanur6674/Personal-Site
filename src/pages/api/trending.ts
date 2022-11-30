import { NextApiRequest, NextApiResponse } from "next";
import data from "./data";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { Trending } = data;
  if (Trending) return res.status(200).json(Trending);
  return res.status(404).json({ error: "data not found" });
}
