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

import com.messconnect.entities.Bread;
import com.messconnect.services.BreadService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/bread")
@CrossOrigin(origins = "http://localhost:3000")
public class BreadController {

	@Autowired
	private BreadService breadService;

	@PostMapping("/addbread")
	public ResponseEntity<?> addBread(@RequestBody @Valid Bread newBread) {
		return new ResponseEntity<>(breadService.addNewBread(newBread), HttpStatus.OK);
	}

	@GetMapping("/getallbreads")
	public ResponseEntity<?> getAllBreadDetails() {
		return new ResponseEntity<>(breadService.getAllBreads(), HttpStatus.OK);
	}

	@DeleteMapping("/deletebread/{id}")
	public ResponseEntity<?> deletebreadDetails(@PathVariable Long id) {
		return new ResponseEntity<>(breadService.deleteBread(id), HttpStatus.OK);

	}

}
