// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import QuestionModel from "@/models/QuestionModel";
import type { NextApiRequest, NextApiResponse } from "next";
import questions from '../db';

type QuestionsProps = {
  questions: QuestionModel
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const idSelected = req.query.id;
  const question = questions.filter(q => `${q.id}` === idSelected);
  if(question.length === 1){
    const questionSelected = question[0].shuffleResponse();

    res.status(200).json(questionSelected.toObject());
  }else{
    res.status(204).send({});
  }

}
