import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {Group} from "../model/Group";

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  data: Group[] = [];

  constructor(
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.firestore.collection('/groupList').valueChanges().subscribe((res: any[]) => {
      this.data = res;
      console.log(res);
    })
  }

}
