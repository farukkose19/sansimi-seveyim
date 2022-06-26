import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLuckyLukeComponent } from './user-lucky-luke.component';

describe('UserLuckyLukeComponent', () => {
  let component: UserLuckyLukeComponent;
  let fixture: ComponentFixture<UserLuckyLukeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLuckyLukeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLuckyLukeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
