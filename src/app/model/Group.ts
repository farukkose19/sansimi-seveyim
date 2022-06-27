import {Timestamp} from "./Timestamp";
import {Question} from "./Question";

export class Group {

  id: string;
  createdDate: string;
  groupName: string;
  userId: string;
  questionList: Question[];
  redisplay: boolean;


  constructor(id: string, createdDate: string, groupName: string, userId: string, questionList: Question[], redisplay: boolean) {
    this.id = id;
    this.createdDate = createdDate;
    this.groupName = groupName;
    this.userId = userId;
    this.questionList = questionList;
    this.redisplay = redisplay;
  }
}
