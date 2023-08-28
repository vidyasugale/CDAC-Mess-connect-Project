package com.messconnect.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.messconnect.services.AddonService;
import com.messconnect.services.MenuService;
import com.messconnect.services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	private MenuService menuService;

	@Autowired
	private UserService userService;

	@Autowired
	private AddonService addonService;

	@GetMapping("/getallmenu")
	public ResponseEntity<?> todaysMenuData() {
		return new ResponseEntity<>(menuService.getAllMenuData(), HttpStatus.OK);

	}

	@GetMapping("/getallitems")
	public ResponseEntity<?> allItemsData() {
		return new ResponseEntity<>(menuService.getAllItemsData(), HttpStatus.OK);

	}

	@GetMapping("/getuserdata/{email}")
	public ResponseEntity<?> userData(@PathVariable String email) {
		return new ResponseEntity<>(userService.getUserData(email), HttpStatus.OK);

	}

	@GetMapping("/getalladdons")
	public ResponseEntity<?> allAddonsData() {
		return new ResponseEntity<>(addonService.getallAddonsData(), HttpStatus.OK);

	}

}
