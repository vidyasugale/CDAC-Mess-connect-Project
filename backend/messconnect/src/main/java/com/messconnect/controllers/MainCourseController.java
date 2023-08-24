package com.messconnect.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
public class MainCourseController {
	
	@Autowired
	private MainCourseService mainCourseService;
	
	@PostMapping("/addmaincourse")
	public ResponseEntity<?> addMainCourse(@RequestBody MainCourse newMainCourse) {
		try {
			return new ResponseEntity<>(mainCourseService.addNewMainCourse(newMainCourse), HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body("Rice not added!!!");
		}
	}
	
	@GetMapping("/getallmaincourses")
	public ResponseEntity<?> getAllMainCourseDetails (){
		try {
			return new ResponseEntity<>(mainCourseService.getAllMainCourse(), HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body("MainCourse not found!!!");
		}	
	}
	
	@DeleteMapping("/deletemaincourse/{id}")
	public ResponseEntity<?> deleteMainCourseDetails (@PathVariable Long id){
		try {
			return new ResponseEntity<>(mainCourseService.deleteMainCourse(id), HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body("MainCourse not found!!!");
		}	
	}
	

}
