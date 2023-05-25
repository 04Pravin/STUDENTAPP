package com.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.student.model.Student;
import com.student.service.IStudentService;

@SpringBootApplication
public class StudentAppApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(StudentAppApplication.class, args);
	}

	
	@Autowired
	private IStudentService studentService;
	@Override
	public void run(String... args) throws Exception {
		
//		Student student = new Student("PravinKumar","201EE517","EEE","7550320814","Erode","Tamil Nadu",638503);
//		studentService.addStudent(student);
		
	}

}
