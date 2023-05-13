import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  updateData :any;

  url ="http://localhost:8080/createStudent";
  url1="http://localhost:8080/getStudent";
  url2="http://localhost:8080/updateStudent";
  url3="http://localhost:8080/deleteById";
  url4="http://localhost:8080/getStudent";
  constructor(private httpClient :HttpClient) { }

  getStudent()
  {
    return this.httpClient.get<Student[]>(`${this.url1}`);
  }

  createUser(student : any)
  {
    return this.httpClient.post(`${this.url}`,student);
  }

  updateStudent(id : any, student :any)
  {
    return this.httpClient.put(`${this.url2}/${id}`, student);
  }

  deleteStudent(studentId :any)
  {
    return this.httpClient.delete(`${this.url3}/${studentId}`);
  }

}
