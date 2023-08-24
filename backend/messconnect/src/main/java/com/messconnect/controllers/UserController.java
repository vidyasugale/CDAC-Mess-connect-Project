package com.messconnect.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.messconnect.entities.User;
import com.messconnect.services.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/signup")
	public ResponseEntity<?> signUp(@RequestBody  @Valid User newUser) {
		try {
			return new ResponseEntity<>(userService.addUser(newUser), HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body("User not added!!!");
		}
	}
	
	@GetMapping("/getuser/{userId}")
	public ResponseEntity<?> getDetails (@PathVariable Long userId){
		try {
			return new ResponseEntity<>(userService.getUser(userId), HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body("User not found!!!");
		}
		
	}
	
	@GetMapping("/getallusers")
	public ResponseEntity<?> getAllUserDetails (){
		try {
			return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body("User not found!!!");
		}
		
	}	
	
	
}
