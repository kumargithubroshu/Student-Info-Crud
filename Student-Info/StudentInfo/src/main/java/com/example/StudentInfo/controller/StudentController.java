package com.example.StudentInfo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.StudentInfo.model.Student;
import com.example.StudentInfo.service.StudentService;

@RestController
@CrossOrigin
public class StudentController {
	
	@Autowired
	private StudentService studentService;
	
	@GetMapping("/getStudent")
	public List<Student> getStudent()
	{
		return studentService.getAllStudent();
	}
	
	@PostMapping("/createStudent")
	public void CreateStudent(@RequestBody Student student)
	{
		studentService.CreateStudent(student);
	}
	
	@GetMapping("/getStudent/{id}")
	public Student getSingleStudent(@PathVariable("id") Integer id)
	{
		return studentService.getSingleStudent(id);
	}
	
	@PutMapping("/updateStudent/{id}")
    public ResponseEntity<?> updateStudent(@PathVariable Integer id, @RequestBody Student student) {
        studentService.updateStudent(id, student);
        return new ResponseEntity<>("Studebt updated With id " +id, HttpStatus.OK);
    }
	
	@DeleteMapping("/deleteById/{id}")
	public void deleteStudent(@PathVariable Integer id)
	{
		studentService.deleteStudentById(id);
	}

}
