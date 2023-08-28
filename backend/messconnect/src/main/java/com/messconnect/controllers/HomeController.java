package com.messconnect.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.messconnect.dto.SigninUser;
import com.messconnect.services.HomeService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HomeController {
	@Autowired
	private HomeService homeService;

	@PostMapping("/signin")
	public ResponseEntity<?> empLogin(@RequestBody @Valid SigninUser request) {
		return new ResponseEntity<>(homeService.authenticate(request), HttpStatus.OK);

	}

	@GetMapping("/home")
	public ResponseEntity<?> homeData() {
		return new ResponseEntity<>(homeService.getHomeData(), HttpStatus.OK);

	}

	@GetMapping("/todaysmenu")
	public ResponseEntity<?> todayMenuData() {
		return new ResponseEntity<>(homeService.getTodayMenuData(), HttpStatus.OK);

	}

}
