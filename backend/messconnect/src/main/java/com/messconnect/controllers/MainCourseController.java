package com.messconnect.controllers;

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

import com.messconnect.entities.MainCourse;
import com.messconnect.services.MainCourseService;

@RestController
@RequestMapping("/maincourse")
@CrossOrigin(origins = "http://localhost:3000")
public class MainCourseController {

	@Autowired
	private MainCourseService mainCourseService;

	@PostMapping("/addmaincourse")
	public ResponseEntity<?> addMainCourse(@RequestBody MainCourse newMainCourse) {
		return new ResponseEntity<>(mainCourseService.addNewMainCourse(newMainCourse), HttpStatus.OK);

	}

	@GetMapping("/getallmaincourses")
	public ResponseEntity<?> getAllMainCourseDetails() {
		return new ResponseEntity<>(mainCourseService.getAllMainCourse(), HttpStatus.OK);

	}

	@DeleteMapping("/deletemaincourse/{id}")
	public ResponseEntity<?> deleteMainCourseDetails(@PathVariable Long id) {
		return new ResponseEntity<>(mainCourseService.deleteMainCourse(id), HttpStatus.OK);
	}

}
