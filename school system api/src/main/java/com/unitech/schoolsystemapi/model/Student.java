package com.unitech.schoolsystemapi.model;

import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Student Id",nullable = false)
    private String studentId; // Removed nullable = false

    @Column(name = "First Name", nullable = false)
    private String firstName;

    @Column(name = "Middle Name", nullable = false)
    private String middleName;

    @Column(name = "Last Name", nullable = false)
    private String lastName;

    @Column(name = "Gender", nullable = false)
    private String gender;

    @Column(name = "Student Address", nullable = false)
    private String address;

    @Column(name = "class_name")
    private String className;

    @Column(name = "Phone Number", nullable = false)
    private String phoneNumber;
}