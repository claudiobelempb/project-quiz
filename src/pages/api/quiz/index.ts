import { shuffle } from "@/utils/array";
import { NextApiRequest, NextApiResponse } from "next";
import questions from '../db';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const ids = questions.map(q => q.id)
  res.status(200).json(shuffle(ids));
}
