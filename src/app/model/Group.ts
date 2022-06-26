import {Timestamp} from "./Timestamp";
import {Question} from "./Question";

export class Group {

  id: string;
  createdDate: string;
  groupName: string;
  userId: string;
  questionList: Question[];


  constructor(id: string, createdDate: string, groupName: string, userId: string, questionList: Question[]) {
    this.id = id;
    this.createdDate = createdDate;
    this.groupName = groupName;
    this.userId = userId;
    this.questionList = questionList;
  }
}
