import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Group} from "../../model/Group";
import {Question} from "../../model/Question";

@Component({
  selector: 'app-user-lucky-luke',
  templateUrl: './user-lucky-luke.component.html',
  styleUrls: ['./user-lucky-luke.component.css']
})
export class UserLuckyLukeComponent implements OnInit {

  id: string = '';
  group: any | Group;
  randomQuestion: Question = new Question('', false);
  collectionName = 'groupList';
  isEffect = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firestore: AngularFirestore,
  ) {
    route.params.subscribe((params: any) => {
      if (params.id) {
        this.id = params.id;
      } else {
        this.router.navigate(['/admin-login']);
      }
    });
  }

  ngOnInit(): void {
    this.firestore.collection(this.collectionName, ref => ref.where('id', '==', this.id)).valueChanges().subscribe((res: any[]) => {
      if (res.length > 0) {
        this.group = res[0];
      }
    });
  }

  getRandomQuestion() {
    if (this.group && this.group.questionList) {

      if (this.group.redisplay) {
        this.randomQuestion = this.group.questionList[Math.floor(Math.random() * this.group.questionList.length)];
        this.effectChange();
      } else {
        // @ts-ignore
        const notSeenQuestions = this.group.questionList.filter((item: Question) => {
          if (!item.isViewed) {
            return item;
          }
        });
        this.randomQuestion = notSeenQuestions[Math.floor(Math.random() * notSeenQuestions.length)];
        this.effectChange();
        this.group.questionList.map((item: Question) => {
          if (item.question == this.randomQuestion.question) {
            item.isViewed = true;
          }
          return item;
        })
        this.update(this.group.id, this.group).then(res => {
        });
      }
    }
  }

  update(id: string, data: any): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).update(data);
  }

  getQuestionLength(): number {
    if (this.group && this.group.questionList) {
      if (this.group.redisplay) {
        return this.group.questionList.length;
      } else {
        // @ts-ignore
        const notSeenQuestions = this.group.questionList.filter((item: Question) => {
          if (!item.isViewed) {
            return item;
          }
        });
        return notSeenQuestions.length;
      }
    }
    return 0;
  }

  effectChange() {
    this.isEffect = true;
    setTimeout(() => {
      this.isEffect = false;
    }, 3000);
  }
}
