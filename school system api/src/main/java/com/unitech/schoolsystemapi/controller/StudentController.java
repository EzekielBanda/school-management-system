package com.unitech.schoolsystemapi.controller;

import com.unitech.schoolsystemapi.model.Student;
import com.unitech.schoolsystemapi.service.student.StudentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/v1/student")
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @PostMapping("/add")
    public ResponseEntity<Student> createStudent(@RequestBody Student student) {
        Student savedStudent = studentService.saveStudent(student);
        return ResponseEntity.ok(savedStudent);
    }

    @GetMapping("/students")
    public ResponseEntity<List<Student>> getStudents(){
        List<Student> students = studentService.getStudents();
        return ResponseEntity.ok(students);
    }
}
