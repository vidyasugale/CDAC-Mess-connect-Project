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

import com.messconnect.entities.Curry;
import com.messconnect.services.CurryService;

@RestController
@RequestMapping("/curry")
@CrossOrigin(origins = "http://localhost:3000")
public class CurryController {

	@Autowired
	private CurryService curryService;

	@PostMapping("/addcurry")
	public ResponseEntity<?> addCurry(@RequestBody Curry newCurry) {
		return new ResponseEntity<>(curryService.addNewRice(newCurry), HttpStatus.OK);

	}

	@GetMapping("/getallcuries")
	public ResponseEntity<?> getAllSweetDetails() {
		return new ResponseEntity<>(curryService.getAllCuries(), HttpStatus.OK);
	}

	@DeleteMapping("/deletecurry/{id}")
	public ResponseEntity<?> deleteSweetDetails(@PathVariable Long id) {
		return new ResponseEntity<>(curryService.deleteCurry(id), HttpStatus.OK);
	}

}
