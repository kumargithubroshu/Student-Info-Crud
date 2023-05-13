package com.example.StudentInfo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.StudentInfo.model.Student;

@Repository
public interface StudentRepository extends MongoRepository<Student,Integer>{

}
