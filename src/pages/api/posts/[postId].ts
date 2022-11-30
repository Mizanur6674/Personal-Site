import { NextApiRequest, NextApiResponse } from "next";
import data from "../data";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { postId } = req.query;
  const { Posts } = data;
  if (postId) {
    const post = Posts.find((value) => value.id === Number(postId))
    return res.status(200).json(post)
  }
  return res.status(404).json({eroor:"Post Not Found"})
}
