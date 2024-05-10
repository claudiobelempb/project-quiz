

export default class ResponseModel {
  #value: string;
  #correct: boolean;
  #revealed: boolean;

  constructor(value: string, correct: boolean, revealed = false) {
    this.#value = value;
    this.#correct = correct;
    this.#revealed = revealed;
  }

  get value() {
    return this.#value;
  }

  get correct() {
    return this.#correct;
  }

  get revealed() {
    return this.#revealed;
  }
  
  static wrong(value: string) {
    return new ResponseModel(value, false);
  }

  static correct(value:string) {
    return new ResponseModel(value, true);
  }

  toReveal(){
    return new ResponseModel(this.#value, this.#correct, true);
  }

  static toEntity(obj: ResponseModel): ResponseModel{
    return new ResponseModel(obj.value, obj.correct, obj.revealed);
  }

  toObject(){
    return {
      value: this.#value,
      correct: this.#correct,
      revealed: this.#revealed,
    } 
  }
}
