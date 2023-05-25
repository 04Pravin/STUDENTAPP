package com.student.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.student.model.Student;
import com.student.repository.IStudentRepository;

@Service
public class StudentServiceImpl implements IStudentService {

	@Autowired
	private IStudentRepository studentRepo;
	
	@Override
	public void addStudent(Student student) {
		// TODO Auto-generated method stub
		studentRepo.save(student);
		
		System.out.println(student);
	}

	@Override
	public void updateStudent(Student student) {
		// TODO Auto-generated method stub
		studentRepo.save(student);
	}

	@Override
	public void deleteStudent(int id) {
		// TODO Auto-generated method stub
		studentRepo.deleteById(id);
	}

	@Override
	public List<Student> getAll() {
		// TODO Auto-generated method stub
		return studentRepo.findAll();
	}

	@Override
	public Optional<Student> getById(int id) {
		// TODO Auto-generated method stub
		if(studentRepo.findById(id) == null) {
			return null;
		}else {
			return studentRepo.findById(id);
		}
	}

}
