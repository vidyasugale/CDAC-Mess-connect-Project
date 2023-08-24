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

import com.messconnect.entities.Sweet;
import com.messconnect.services.SweetService;



@RestController
@RequestMapping("/sweet")
public class SweetController {
	
	@Autowired
	private SweetService sweetService;
	
	@PostMapping("/addsweet")
	public ResponseEntity<?> addSweet(@RequestBody Sweet newSweet) {
		try {
			return new ResponseEntity<>(sweetService.addNewSweet(newSweet), HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body("Sweet not added!!!");
		}
	}
	
	@GetMapping("/getallsweets")
	public ResponseEntity<?> getAllSweetDetails (){
		try {
			return new ResponseEntity<>(sweetService.getAllSweets(), HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body("Sweets not found!!!");
		}	
	}
	
	@DeleteMapping("/deletesweet/{id}")
	public ResponseEntity<?> deleteSweetDetails (@PathVariable Long id){
		try {
			return new ResponseEntity<>(sweetService.deleteSweet(id), HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body("Sweets not found!!!");
		}	
	}

}
