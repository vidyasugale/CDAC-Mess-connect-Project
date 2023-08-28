package com.messconnect.dto;

import com.messconnect.entities.Role;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SigninUserResp {

	private Long id;
	private String firstName;
	private String lastName;
	private double balance;
	private String email;
	private String phone;
	private String address;
	private Role role;

}
