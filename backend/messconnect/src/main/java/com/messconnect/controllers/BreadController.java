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

import com.messconnect.entities.Bread;
import com.messconnect.services.BreadService;

@RestController
@RequestMapping("/bread")
public class BreadController {

	
	@Autowired
	private BreadService breadService;
	
	@PostMapping("/addbread")
	public ResponseEntity<?> addBread(@RequestBody Bread newBread) {
		try {
			return new ResponseEntity<>(breadService.addNewBread(newBread), HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body("Bread not added!!!");
		}
	}
	
	@GetMapping("/getallbreads")
	public ResponseEntity<?> getAllBreadDetails (){
		try {
			return new ResponseEntity<>(breadService.getAllBreads(), HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body("Bread not found!!!");
		}	
	}
	
	@DeleteMapping("/deletebread/{id}")
	public ResponseEntity<?> deletebreadDetails (@PathVariable Long id){
		try {
			return new ResponseEntity<>(breadService.deleteBread(id), HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body("Bread not found!!!");
		}	
	}
	
}
