import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetStudentListComponent } from './get-student-list/get-student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentListComponent } from './update-student-list/update-student-list.component';

const routes: Routes = [
  {path:'',component:GetStudentListComponent},
  {path:'app-create-student',component:CreateStudentComponent},
  {path:'update',component:UpdateStudentListComponent},
  {path:'app-get-student-list',component:GetStudentListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
