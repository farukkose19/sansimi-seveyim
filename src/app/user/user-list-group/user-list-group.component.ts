import { Component, OnInit } from '@angular/core';
import {Group} from "../../model/Group";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-list-group',
  templateUrl: './user-list-group.component.html',
  styleUrls: ['./user-list-group.component.css']
})
export class UserListGroupComponent implements OnInit {

  groupList: Group[] = [];
  faCirclePlus = faCirclePlus;

  constructor(
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.firestore.collection('/groupList').valueChanges().subscribe((res: any[]) => {
      this.groupList = res;
    })
  }
}
