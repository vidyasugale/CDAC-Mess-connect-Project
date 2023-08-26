package com.messconnect.controllers;

import org.modelmapper.ModelMapper;
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

import com.messconnect.dto.UserDTO;
import com.messconnect.entities.User;
import com.messconnect.services.UserService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

	@Autowired
	private UserService userService;

	@Autowired
	private ModelMapper mapper;

	@PostMapping("/signup")
	public ResponseEntity<?> signUp(@RequestBody @Valid UserDTO newUserDTO) {
		User newUser = mapper.map(newUserDTO, User.class);
		return new ResponseEntity<>(userService.addUser(newUser), HttpStatus.OK);
	}

	@GetMapping("/getuser/{userId}")
	public ResponseEntity<?> getDetails(@PathVariable Long userId) {
		return new ResponseEntity<>(userService.getUser(userId), HttpStatus.OK);
	}

	@GetMapping("/getallusers")
	public ResponseEntity<?> getAllUserDetails() {
		return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
	}

	@DeleteMapping("/deleteuser/{id}")
	public ResponseEntity<?> deleteUserDetails(@PathVariable Long id) {
		return new ResponseEntity<>(userService.deleteUser(id), HttpStatus.OK);

	}

}
