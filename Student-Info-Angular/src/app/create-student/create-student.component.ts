import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {

  constructor(private tps : StudentService , private router:Router){}

  createStudent =new FormGroup
  ({
  studentId:new FormControl(),
  studentName:new FormControl(''),
  studentRollNo:new FormControl(),
  studentDOB:new FormControl(''),
  studentAddress:new FormControl('')
  })

  onSubmit()
  {  
    this.tps.createUser(this.createStudent.value).subscribe(res =>{
      console.log(res);
    });
    this.router.navigate(['/app-get-student-list']);
  }

}
