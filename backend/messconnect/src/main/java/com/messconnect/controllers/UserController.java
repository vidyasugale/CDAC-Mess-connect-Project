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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.messconnect.dto.OrderDTO;
import com.messconnect.dto.UserDTO;
import com.messconnect.dto.UserDTO2;
import com.messconnect.entities.User;
import com.messconnect.services.OrderService;
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

	@Autowired
	private OrderService orderService;

	@PostMapping("/signup")
	public ResponseEntity<?> signUp(@RequestBody @Valid UserDTO newUserDTO) {
		User newUser = mapper.map(newUserDTO, User.class);
		return new ResponseEntity<>(userService.addUser(newUser), HttpStatus.OK);
	}

	@PutMapping("/update/{userId}")
	public ResponseEntity<?> updateProfile(@RequestBody @Valid UserDTO2 user, @PathVariable Long userId) {
		return new ResponseEntity<>(userService.updateUserProfile(user, userId), HttpStatus.OK);

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

	@GetMapping("/getuserbalance/{userId}")
	public ResponseEntity<?> getBalance(@PathVariable Long userId) {
		return new ResponseEntity<>(userService.getUserBalance(userId), HttpStatus.OK);
	}

	@GetMapping("/getuserorders/{userId}")
	public ResponseEntity<?> getOrders(@PathVariable Long userId) {
		return new ResponseEntity<>(userService.getUserOrders(userId), HttpStatus.OK);
	}

	@PostMapping("/order")
	public ResponseEntity<?> placeOrder(@RequestBody OrderDTO newOrderDTO) {
		return new ResponseEntity<>(orderService.placeNewOrder(newOrderDTO), HttpStatus.OK);
	}

}
