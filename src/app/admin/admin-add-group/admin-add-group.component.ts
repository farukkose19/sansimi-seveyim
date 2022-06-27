import {Component, OnInit} from '@angular/core';
import {Question} from "../../model/Question";
import {ActivatedRoute, Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Group} from "../../model/Group";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-admin-add-group',
  templateUrl: './admin-add-group.component.html',
  styleUrls: ['./admin-add-group.component.css']
})
export class AdminAddGroupComponent implements OnInit {

  group: Group = new Group();
  collectionName = 'groupList';
  id = '';

  constructor(
    private router: Router,
    private firestore: AngularFirestore,
    private authService: AuthService,
    private route: ActivatedRoute,
  ) {
    route.params.subscribe((params: any) => {
      if (params.id) {
        this.id = params.id;
      }
    });
  }

  ngOnInit(): void {
    this.firestore.collection(this.collectionName, ref => ref.where('id', '==', this.id)).valueChanges().subscribe((res: any[]) => {
      if (res.length > 0) {
        this.group = res[0];
        this.group.questionList.push(new Question('', false));
      }
    });
    if (!this.id) {
      this.group.questionList.push(new Question('', false));
    }
    this.authService.initAuthListener().subscribe(user => {
      this.group.userId = user.email;
    })
  }

  checkList() {
    // @ts-ignore
    const freeItem = this.group.questionList.filter((item: Question) => {
      if (!item.question) {
        return item;
      }
    });
    if (freeItem.length == 0) {
      this.group.questionList.push(new Question('', false));
    }
  }

  handleProcess() {
    this.group.questionList.pop();
    if (this.id) {
      this.update(this.id, this.group).then(res => {
        this.router.navigate(['/'])
      });
    } else {
      this.save();
    }
  }

  save() {
    const id = this.firestore.createId();
    const group: Group = new Group(id, '' + new Date().getTime(), this.group.groupName, this.group.userId,
      this.group.questionList, this.group.redisplay);
    try {
      this.firestore.collection(this.collectionName).doc(id).set(
        JSON.parse(JSON.stringify(group))
      ).then(res => {
        this.router.navigate(['/'])
      }).catch(error => {
        console.log(error);
        this.group.questionList.push(new Question('', false));
      })
    } catch (e) {
      console.log(e);
      this.group.questionList.push(new Question('', false));
    }
  }

  update(id: string, data: any): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).update(
      JSON.parse(JSON.stringify(data))
    );
  }
}
