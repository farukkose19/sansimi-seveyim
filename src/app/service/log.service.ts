import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Question} from "../model/Question";

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(
    private firestore: AngularFirestore,
  ) { }

  setLog(logObject: Object) {
    const id = this.firestore.createId();
    try {
      this.firestore.collection('userLogs').doc(id).set(
        JSON.parse(JSON.stringify(logObject))
      ).then(res => {
      }).catch(error => {
        console.log(error);
      })
    } catch (e) {
      console.log(e);
    }
  }
}
