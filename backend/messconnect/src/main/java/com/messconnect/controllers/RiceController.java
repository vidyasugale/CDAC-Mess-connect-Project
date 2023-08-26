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

import com.messconnect.entities.Rice;
import com.messconnect.services.RiceService;

@RestController
@RequestMapping("/rice")
@CrossOrigin(origins = "http://localhost:3000")
public class RiceController {

	@Autowired
	private RiceService riceService;

	@PostMapping("/addrice")
	public ResponseEntity<?> addRice(@RequestBody Rice newRice) {
		return new ResponseEntity<>(riceService.addNewRice(newRice), HttpStatus.OK);

	}

	@GetMapping("/getallrices")
	public ResponseEntity<?> getAllRiceDetails() {
		return new ResponseEntity<>(riceService.getAllRice(), HttpStatus.OK);
	}

	@DeleteMapping("/deleterice/{id}")
	public ResponseEntity<?> deleteRiceDetails(@PathVariable Long id) {
		return new ResponseEntity<>(riceService.deleteRice(id), HttpStatus.OK);
	}

}
