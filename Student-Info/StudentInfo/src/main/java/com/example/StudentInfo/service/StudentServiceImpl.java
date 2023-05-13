package com.example.StudentInfo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.StudentInfo.model.Student;
import com.example.StudentInfo.repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService {
	
	@Autowired
	private StudentRepository studentRepo;

	@Override
	public List<Student> getAllStudent() {
		return studentRepo.findAll();
	}

	@Override
	public void CreateStudent(Student student) {
		studentRepo.save(student);
		
	}

	@Override
	public Student getSingleStudent(Integer studentId) {
		  Optional<Student> findById = studentRepo.findById(studentId);
		 if(findById.isPresent())
		 {
		         Student student = findById.get();
		         return student;
		 }
		return null;
	}

	@Override
	public void updateStudent(Integer studentId, Student student) {
		Optional<Student> byId = studentRepo.findById(studentId);
		if(byId.isPresent())
		{
			Student student2 = byId.get();
			student2.setStudentName(student.getStudentName());
			student2.setStudentRollNo(student.getStudentRollNo());
			student2.setStudentDOB(student.getStudentDOB());
			student2.setStudentAddress(student.getStudentAddress());
			studentRepo.save(student2);
		}
	}

	@Override
	public void deleteStudentById(Integer studentId) {
		studentRepo.deleteById(studentId);
	}

}
