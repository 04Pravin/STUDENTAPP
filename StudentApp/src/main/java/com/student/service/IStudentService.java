package com.student.service;

import java.util.List;
import java.util.Optional;

import com.student.model.Student;

public interface IStudentService {

	void addStudent(Student student);
	
	void updateStudent(Student student);
	
	void deleteStudent(int id);
	
	List<Student> getAll();
	
	Optional<Student> getById(int id);
}
