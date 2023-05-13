package com.example.StudentInfo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="student")
public class Student {
	
	@Id
	private Integer studentId;
	private String studentName;
	private Integer studentRollNo;
	private String studentDOB;
	private String studentAddress;
	
	public Student() {
		super();
	}
	
	public Student(Integer studentId, String studentName, Integer studentRollNo, String studentDOB,
			String studentAddress) {
		super();
		this.studentId = studentId;
		this.studentName = studentName;
		this.studentRollNo = studentRollNo;
		this.studentDOB = studentDOB;
		this.studentAddress = studentAddress;
	}
	public Integer getStudentId() {
		return studentId;
	}
	public void setStudentId(Integer studentId) {
		this.studentId = studentId;
	}
	public String getStudentName() {
		return studentName;
	}
	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
	public Integer getStudentRollNo() {
		return studentRollNo;
	}
	public void setStudentRollNo(Integer studentRollNo) {
		this.studentRollNo = studentRollNo;
	}
	public String getStudentDOB() {
		return studentDOB;
	}
	public void setStudentDOB(String studentDOB) {
		this.studentDOB = studentDOB;
	}
	public String getStudentAddress() {
		return studentAddress;
	}
	public void setStudentAddress(String studentAddress) {
		this.studentAddress = studentAddress;
	}
	
	

}
