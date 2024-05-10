import { shuffle } from "@/utils/array";
import ResponseModel from "./ResponseModel";

export default class QuestionModel  {
  #id: number;
  #statement: string;
  #answers: ResponseModel[];
  #correct: boolean;
  #respond: boolean;
  // #answered:boolean;

  constructor(id: number, statement: string, answers: ResponseModel[], correct = false, respond = false) {
    this.#id = id;
    this.#statement = statement;
    this.#answers = answers;
    this.#correct = correct;
    this.#respond = respond;
  }

  get id(){
    return this.#id;
  }

  get statement(){
    return this.#statement;
  }

  get answers(){
    return this.#answers;
  }

  get correct(){
    return this.#correct;
  }

  get notRespond(){
    return !this.respond;
  }

  get respond(){
    for(let answer of this.#answers){
      if(answer.revealed) return true;
    }
    return false;
  }

  respondHow(index: number): QuestionModel {
    const correct = this.#answers[index]?.correct;
    console.log(correct);
    const response = this.#answers.map((response, i) => {
      const selectedResponse = index === i;
      const musReveal = selectedResponse || response.correct
      return musReveal ? response.toReveal() : response;
    });
    return new QuestionModel(this.id, this.statement, response, correct);
  }

  shuffleResponse(): QuestionModel{
    let shuffleResponse = shuffle(this.#answers);
    return new QuestionModel(this.#id, this.#statement, shuffleResponse, this.#correct);
  }

  static toEntity(obj: QuestionModel): QuestionModel{
    const answers = obj.answers.map(answer => ResponseModel.toEntity(answer));

    return new QuestionModel(obj.id, obj.statement, answers, obj.correct);
  }

  toObject(){
    return {
      id: this.#id,
      statement: this.#statement,
      respond: this.#respond,
      correct: this.#correct,
      answers: this.#answers.map(r => r.toObject()),
    } 
  }
}
