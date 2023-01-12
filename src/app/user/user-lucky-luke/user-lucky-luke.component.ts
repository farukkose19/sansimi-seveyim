import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Group} from "../../model/Group";
import {Question} from "../../model/Question";
import {faArrowsRotate} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-user-lucky-luke',
  templateUrl: './user-lucky-luke.component.html',
  styleUrls: ['./user-lucky-luke.component.css']
})
export class UserLuckyLukeComponent implements OnInit, OnDestroy {

  id: string = '';
  group: Group = new Group();
  randomQuestion: Question = new Question();
  collectionName = 'groupList';
  isEffect = false;
  faArrowsRotate = faArrowsRotate;
  minutes: number = 0;
  seconds: number = 0;
  counterTime = this.group.counter;
  interval: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firestore: AngularFirestore,
  ) {
    route.params.subscribe((params: any) => {
      this.id = params.id;
    });
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  ngOnInit(): void {
    this.firestore.collection(this.collectionName, ref => ref.where('id', '==', this.id)).valueChanges().subscribe((res: any[]) => {
      if (res.length > 0) {
        this.group = res[0];
        if (!this.group.counter) {
          this.group.counter = 5 * 60 * 1000;
        }
        this.initialTimer();
      }
    });
  }

  getRandomQuestion() {
    this.stopTimer();
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
    this.startTimer();
    this.isEffect = true;
    setTimeout(() => {
      this.isEffect = false;
    }, 3000);
  }

  refresh() {
    this.stopTimer();
    this.isEffect = false;
    this.group.questionList = this.group.questionList.map(item => {
      item.isViewed = false;
      return item;
    })
    this.update(this.group.id, this.group).then(res => {
      this.randomQuestion = new Question();
    });
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.minutes = Math.floor((this.counterTime % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((this.counterTime % (1000 * 60)) / 1000);
      if (this.counterTime <= 0) {
        this.playSound();
        clearInterval(this.interval);
      } else {
        this.counterTime -= 1000;
      }
    }, 1000);
  }

  stopTimer() {
    try {
      clearInterval(this.interval);
    } catch (e) {
    }
    this.initialTimer();
  }

  initialTimer() {
    this.counterTime = this.group.counter;
    this.minutes = Math.floor((this.group.counter % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((this.group.counter % (1000 * 60)) / 1000);
  }

  playSound() {
    const context = new AudioContext();
    const oscillator = context.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.value = 750;
    oscillator.connect(context.destination);
    oscillator.start();
    setTimeout(function () {
      oscillator.stop();
    }, 500);
  }

  getColor(): string {
    if (this.minutes == 0 && this.seconds <= 60 && this.seconds > 30) {
      return 'orange';
    } else if (this.minutes == 0 && this.seconds <= 60 && this.seconds <= 30) {
      return 'red'
    } else {
      return 'black'
    }
  }
}
