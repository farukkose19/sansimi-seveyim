export class Question {
  question: string;
  isViewed: boolean = false;

  constructor(question: string, isViewed: boolean) {
    this.question = question;
    this.isViewed = isViewed;
  }
}
