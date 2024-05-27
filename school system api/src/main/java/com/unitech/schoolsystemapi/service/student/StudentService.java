package com.unitech.schoolsystemapi.service.student;

import com.unitech.schoolsystemapi.model.Student;

import java.util.List;

public interface StudentService {
    Student saveStudent(Student student);
    List<Student> getStudents();
}
