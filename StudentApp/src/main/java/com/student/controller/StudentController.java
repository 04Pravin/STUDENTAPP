package com.student.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.student.model.Student;
import com.student.service.IStudentService;

@RestController
@RequestMapping("student-api")
@CrossOrigin("http://localhost:4200/")
public class StudentController {

	@Autowired
	private IStudentService studentService;
	
	@PostMapping( "students")
	ResponseEntity<Void>addStudent(@RequestBody Student student){
		studentService.addStudent(student);
		return ResponseEntity.status(HttpStatus.OK).header("info", "Adding student").build();
	}
	
	@GetMapping("students")
	ResponseEntity<List<Student>>getAll(){
		return ResponseEntity.status(HttpStatus.OK).header("info", "Get all").body(studentService.getAll());
	}
	
	@DeleteMapping("students/id/{id}")
	ResponseEntity<Void>deleteStudent(@PathVariable("id") int id){
		studentService.deleteStudent(id);
		return ResponseEntity.status(HttpStatus.ACCEPTED).build();
	}
	
	@GetMapping("students/{id}")
	ResponseEntity<Optional<Student>>getById(@PathVariable("id") int id){
		return ResponseEntity.status(HttpStatus.OK).header("info", "Get by id").body(studentService.getById(id));
	}
	
	
}
