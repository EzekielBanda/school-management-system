package com.unitech.schoolsystemapi.service.student;

import com.unitech.schoolsystemapi.model.Student;
import com.unitech.schoolsystemapi.repository.StudentRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImp implements StudentService {

    private final StudentRepository studentRepository;

    public StudentServiceImp(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    @Transactional
    public Student saveStudent(Student student) {
        // Generate a temporary ID for the student
        String temporaryStudentId = generateTemporaryStudentId();
        student.setStudentId(temporaryStudentId);

        // Save the student to get the generated ID
        Student savedStudent = studentRepository.save(student);

        // Generate the final studentId based on the generated ID
        String studentId = generateStudentId(savedStudent.getId());
        savedStudent.setStudentId(studentId);

        // Update the student with the new studentId
        return studentRepository.save(savedStudent);
    }

    @Override
    public List<Student> getStudents() {
        return studentRepository.findAll();
    }

    private String generateStudentId(Long id) {
        return "MK" + (1100 + id - 1);
    }

    private String generateTemporaryStudentId() {
        return "TMP" + System.currentTimeMillis(); // or some other unique temporary value
    }
}