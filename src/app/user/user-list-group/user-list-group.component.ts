import { Component, OnInit } from '@angular/core';
import {Group} from "../../model/Group";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-user-list-group',
  templateUrl: './user-list-group.component.html',
  styleUrls: ['./user-list-group.component.css']
})
export class UserListGroupComponent implements OnInit {

  groupList: Group[] = [];

  constructor(
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.firestore.collection('/groupList').valueChanges().subscribe((res: any[]) => {
      this.groupList = res;
    })
  }
}
