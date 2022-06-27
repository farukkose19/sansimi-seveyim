import {Timestamp} from "./Timestamp";
import {Question} from "./Question";

export class Group {

  id: string;
  createdDate: string;
  groupName: string;
  userId: string;
  questionList: Question[];
  redisplay: boolean;


  constructor(id?: string, createdDate?: string, groupName?: string, userId?: string, questionList?: Question[], redisplay?: boolean) {
    this.id = id ? id : '';
    this.createdDate = createdDate ? createdDate : '';
    this.groupName = groupName ? groupName: '';
    this.userId = userId ? userId : '';
    this.questionList = questionList ? questionList : [];
    this.redisplay = redisplay ? redisplay : false;
  }
}
