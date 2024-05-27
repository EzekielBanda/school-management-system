package com.unitech.schoolsystemapi.repository;

import com.unitech.schoolsystemapi.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    Student findTopByOrderByStudentIdDesc();
}
