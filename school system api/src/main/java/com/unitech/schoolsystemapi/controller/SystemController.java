package com.unitech.schoolsystemapi.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/v1/")
public class SystemController {

    @GetMapping("/student")
    public ResponseEntity<String> studentAndTeacherAndParentsAndAdmin() {
        return ResponseEntity.ok("Hello from secured Student");
    }

    @GetMapping("/admin_only")
    public ResponseEntity<String> adminOnly() {
        return ResponseEntity.ok("Hello from admin only url");
    }

    @GetMapping("/teacher")
    public ResponseEntity<String> teachersAndAdminOnly() {
        return ResponseEntity.ok("Hello from admin only url");
    }

    @GetMapping("/parents")
    public ResponseEntity<String> parentsAndAdminOnly() {
        return ResponseEntity.ok("Hello from admin only url");
    }
}
