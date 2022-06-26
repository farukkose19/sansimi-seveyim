import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddGroupComponent } from './admin-add-group.component';

describe('AdminAddGroupComponent', () => {
  let component: AdminAddGroupComponent;
  let fixture: ComponentFixture<AdminAddGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
