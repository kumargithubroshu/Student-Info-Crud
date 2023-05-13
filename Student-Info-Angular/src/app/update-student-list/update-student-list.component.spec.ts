import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStudentListComponent } from './update-student-list.component';

describe('UpdateStudentListComponent', () => {
  let component: UpdateStudentListComponent;
  let fixture: ComponentFixture<UpdateStudentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStudentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
