export class Question {
  question: string;
  isViewed: boolean;

  constructor(question: string, isViewed: boolean) {
    this.question = question;
    this.isViewed = isViewed;
  }
}
