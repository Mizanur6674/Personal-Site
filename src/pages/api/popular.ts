import { NextApiRequest, NextApiResponse } from "next";
import data from "./data";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const {Popular} = data;
    if(Popular) return res.status(200).json(Popular)
    return res.status(404).json({error:"Data Not Found"})
}