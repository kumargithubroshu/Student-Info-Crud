import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-student-list',
  templateUrl: './get-student-list.component.html',
  styleUrls: ['./get-student-list.component.css']
})
export class GetStudentListComponent implements OnInit{
   allData: any;
    // studentId :Number |undefined;
    // studentName :String |undefined;
    // studentRollNo :Number |undefined;
    // studentDOB :String |undefined;
    // studentAddress :String |undefined;

constructor(private gs :StudentService , private router: Router)
{
  console.log("working");
this.getStudent();
}

ngOnInit(): void {
    
}

getStudent()
{
  this.gs.getStudent().subscribe(res =>{
    this.allData=res;
    console.log(res);
  });
}

deStudent(studentId : Number)
{
   this.gs.deleteStudent(studentId).subscribe(res =>
    {
      alert("deleted successfully");
      this.getStudent();
    });
    
}

updStudent(data :any)
{
  console.log(data);
  this.gs.updateData=data;
  this.router.navigate(['/update']);
}
}
