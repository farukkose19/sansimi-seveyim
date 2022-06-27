import {Component, OnInit} from '@angular/core';
import {Question} from "../../model/Question";
import {Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Group} from "../../model/Group";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-admin-add-group',
  templateUrl: './admin-add-group.component.html',
  styleUrls: ['./admin-add-group.component.css']
})
export class AdminAddGroupComponent implements OnInit {

  questionList: Question[] = [];
  redisplay = false;
  groupName = '';
  collectionName = 'groupList';
  email = '';

  constructor(
    private router: Router,
    private firestore: AngularFirestore,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.questionList.push(new Question('', false));
    this.authService.initAuthListener().subscribe(user => {
      this.email = user.email;
    })
  }

  checkList() {
    // @ts-ignore
    const freeItem = this.questionList.filter((item: Question) => {
      if (!item.question) {
        return item;
      }
    });
    if (freeItem.length == 0) {
      this.questionList.push(new Question('', false));
    }
  }

  save() {
    this.questionList.pop();
    const id = this.firestore.createId();
    const group: Group = new Group(id, '' + new Date().getTime(), this.groupName, this.email,
      this.questionList, this.redisplay);

    try {
      this.firestore.collection(this.collectionName).doc(id).set(
        JSON.parse(JSON.stringify(group))
      ).then(res => {
        this.router.navigate(['/'])
      }).catch(error => {
        console.log(error);
        this.questionList.push(new Question('', false));
      })
    } catch (e) {
      console.log(e);
      this.questionList.push(new Question('', false));
    }
  }
}
