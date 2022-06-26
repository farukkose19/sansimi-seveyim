import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListGroupComponent } from './admin-list-group.component';

describe('AdminListGroupComponent', () => {
  let component: AdminListGroupComponent;
  let fixture: ComponentFixture<AdminListGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminListGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
