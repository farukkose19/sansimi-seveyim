export class Group {

  id: string;
  createdDate: Date;
  groupName: string;
  userId: string;
  wordList: string[];


  constructor(id: string, createdDate: Date, groupName: string, userId: string, wordList: string[]) {
    this.id = id;
    this.createdDate = createdDate;
    this.groupName = groupName;
    this.userId = userId;
    this.wordList = wordList;
  }
}
