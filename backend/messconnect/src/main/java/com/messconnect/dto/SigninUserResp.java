package com.messconnect.dto;

import java.util.List;

import com.messconnect.entities.Order;
import com.messconnect.entities.Role;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class SigninUserResp {

	private Long id;
	private String firstName;
	private String lastName;
	private double balance;
	private List<Order> orders;
	private Role role;
	
}
