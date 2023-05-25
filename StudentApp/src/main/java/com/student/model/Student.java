package com.student.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class Student {

	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "student_sequence")
    @SequenceGenerator(name = "student_sequence", sequenceName = "student_seq")
  
	private Integer id;
	private String name;
	private String rollNo;
	private String department;
	private String mobileNum;
	private String city;
	private String state;
	private long pincode;

	
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public Student(String name, String rollNo, String department, String mobileNum, String city, String state,
			long pincode) {
		super();
		this.name = name;
		this.rollNo = rollNo;
		this.department = department;
		this.mobileNum = mobileNum;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
	}

	public Student(Integer id, String name, String rollNo, String department, String mobileNum, String city, String state,
			long pincode) {
		super();
		this.id = id;
		this.name = name;
		this.rollNo = rollNo;
		this.department = department;
		this.mobileNum = mobileNum;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
	}



	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getRollNo() {
		return rollNo;
	}

	public void setRollNo(String rollNo) {
		this.rollNo = rollNo;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getMobileNum() {
		return mobileNum;
	}

	public void setMobileNum(String mobileNum) {
		this.mobileNum = mobileNum;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public long getPincode() {
		return pincode;
	}

	public void setPincode(long pincode) {
		this.pincode = pincode;
	}
	

	
}
