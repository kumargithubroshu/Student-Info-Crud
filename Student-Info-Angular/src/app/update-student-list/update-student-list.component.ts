import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'update',
  templateUrl: './update-student-list.component.html',
  styleUrls: ['./update-student-list.component.css']
})
export class UpdateStudentListComponent implements OnInit {

  data:any;

  // studentId :Number|undefined;

  constructor(private us:StudentService, private router :Router){
    this.data=this.us.updateData;
    console.log("My updated record are :"+this.data);
    this.updateStudent.setValue(this.data);
  }

  ngOnInit(): void {
    
  }

  updateStudent =new FormGroup(
    {
      studentId: new FormControl(''),
      studentName : new FormControl(''),
      studentRollNo :new FormControl(''),
      studentDOB :new FormControl(''),
      studentAddress :new FormControl('')
    }
  )


  update()
  {
     this.us.updateStudent(this.updateStudent.value.studentId, this.updateStudent.value).subscribe(res =>{
      
     });
     alert("field updated");
     this.router.navigate(['/app-get-student-list']);
  }


}
