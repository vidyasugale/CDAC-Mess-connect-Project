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
		try {
			return new ResponseEntity<>(homeService.authenticate(request), HttpStatus.OK);
		} catch (RuntimeException e) {
			System.out.println(e);
			return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body(e.getMessage());
		}
	}
	
	@GetMapping("/home")
	public ResponseEntity<?> homeData() {
			try {
				return new ResponseEntity<>(homeService.getHomeData(), HttpStatus.OK);
			} catch (RuntimeException e) {
				System.out.println(e);
				return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body(e.getMessage());
			}
		}
		
	}

