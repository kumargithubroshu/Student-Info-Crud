package com.example.StudentInfo.service;

import java.util.List;

import com.example.StudentInfo.model.Student;

public interface StudentService {
	
	public List<Student> getAllStudent();
	
	public void CreateStudent(Student student);
	
	public Student getSingleStudent(Integer studentId);
	
	public void updateStudent(Integer studentId,Student student );
	
	public void deleteStudentById(Integer studentId);
	
}
